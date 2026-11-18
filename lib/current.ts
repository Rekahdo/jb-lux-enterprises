interface ProductPriceProps {
  amountInCents: number;
  discount?: number; // Assuming discount is a percentage (e.g., 15 for 15%)
  currency: "NGN" | "USD" | "EUR";
}

export function convertCent({
  amountInCents,
  discount = 0,
  currency,
}: ProductPriceProps) {
  const discountCent =
    discount > 0 ? Math.round((amountInCents * discount) / 100) : 0;
  const finalAmountInCents = amountInCents - discountCent;

  const mainAmount = amountInCents / 100;
  const finalAmount = finalAmountInCents / 100;
  const discountAmount = discountCent / 100;

  const cent = {
    NGN: "en-NG",
    USD: "en-US",
    EUR: "en-EU",
  };

  const formatter = new Intl.NumberFormat(cent[currency], {
    style: "currency",
    currency: currency,
  });

  const formattedPrice = formatter.format(mainAmount);
  const formattedDiscountPrice = formatter.format(finalAmount);
  const formattedDiscountAmount = formatter.format(discountAmount);

  return {
    centPrice: amountInCents,
    unitPrice: formattedPrice,
    discount,
    discountCent,
    discountPrice: formattedDiscountPrice,
    discountAmount: formattedDiscountAmount,
    purchaseCent: discount === 0 ? amountInCents : discountCent,
    purchasePrice: discount === 0 ? amountInCents : formattedDiscountPrice,
  };
}
