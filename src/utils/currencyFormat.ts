const currencyFormat: Intl.NumberFormat = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

export const formatNumber = (number: number) => {
  return currencyFormat.format(number);
};
