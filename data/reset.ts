import { AddressType } from "./address";
import { PhoneType } from "./phone";

export type SrcImageType = {
  src: string;
  alt: string;
};

export type HrefFile = {
  href: string;
  name: string;
  type: string;
};

export type ColorImage = {
  name: string;
  hex?: string;
  image: SrcImageType;
};

export type AddressPropType = {
  addressId: string;
  address: AddressType | undefined;
};

export type PhonePropType = {
  phoneId: string;
  phone: PhoneType | undefined;
};
