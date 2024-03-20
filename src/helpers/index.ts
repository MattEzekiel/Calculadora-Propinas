export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-Ar", {
    style: "currency",
    currency: "ARS",
    notation: "standard",
    currencyDisplay: "symbol",
    useGrouping: true,
  }).format(price);
};
