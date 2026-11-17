import { addressValidator, phoneValidator } from "@/convex/schema";
import { AddressType } from "@/data/address";
import { PhoneType } from "@/data/phone";
import { Infer } from "convex/values";

type FormatAddressOptionsType = {
  name?: boolean;
  buildingName?: boolean;
  houseNumber?: boolean;
  street?: boolean;
  city?: boolean;
  state?: boolean;
  country?: boolean;
  postalCode?: boolean;
  closestBusStop?: boolean;
};

type OperationType = "pick" | "omit" | "add";

export function formatAddress({
  address,
  operation,
  options,
}: {
  address: Infer<typeof addressValidator> | AddressType | undefined;
  operation?: OperationType;
  options?: FormatAddressOptionsType;
}) {
  if (!address) return undefined;

  let initial: FormatAddressOptionsType = {
    name: true,
    buildingName: true,
    houseNumber: true,
    street: true,
    city: true,
    state: true,
    country: true,
    postalCode: false,
    closestBusStop: false,
  };

  initial = filter({ initial, options, operation });

  const parts = [
    initial.name && address.name,
    initial.buildingName && address.buildingName,
    initial.houseNumber && address.houseNumber,
    initial.street && address.street,
    initial.city && address.city,
    initial.state && address.state,
    initial.country && address.country,
    initial.postalCode && address.postalCode,
    initial.closestBusStop && address.closestBusStop,
  ];

  return parts.filter(Boolean).join(", ");
}

type FormatPhoneNumberOptionsType = { code?: boolean; number?: boolean };

export function formatPhone({
  phone,
  operation,
  options,
}: {
  phone: Infer<typeof phoneValidator> | PhoneType | undefined;
  options?: FormatPhoneNumberOptionsType;
  operation?: OperationType;
}) {
  if (!phone) return undefined;

  let initial: FormatPhoneNumberOptionsType = {
    code: true,
    number: true,
  };

  initial = filter({ initial, options, operation });

  const parts = [
    initial.code && phone.code,
    initial.number &&
      phone.number &&
      `${phone.number.slice(0, 3)} ${phone.number.slice(3, 6)} ${phone.number.slice(6)}`,
  ];

  return parts.filter(Boolean).join(" ");
}

function filter<T extends Record<any, any>>({
  initial,
  options,
  operation,
}: {
  initial: T;
  options?: T;
  operation?: OperationType;
}): T {
  if (operation === undefined) return initial;

  if (operation === "omit") {
    initial = {
      ...initial,
      ...Object.fromEntries(Object.entries(initial).map(([k, _]) => [k, true])),
      ...Object.fromEntries(
        Boolean(options)
          ? Object.entries(options!).map(([k, v]) => [k, !v])
          : Object.entries(initial).map(([k, _]) => [k, true]),
      ),
    };
  } else if (operation === "pick") {
    initial = {
      ...initial,
      ...Object.fromEntries(
        Object.entries(initial).map(([k, _]) => [k, false]),
      ),
      ...Object.fromEntries(
        Boolean(options)
          ? Object.entries(options!).map(([k, v]) => [k, v])
          : Object.entries(initial).map(([k, _]) => [k, false]),
      ),
    };
  } else {
    initial = {
      ...initial,
      ...Object.fromEntries(
        Boolean(options)
          ? Object.entries(options!).map(([k, v]) => [k, v])
          : Object.entries(initial).map(([k, v]) => [k, v]),
      ),
    };
  }

  return initial;
}
