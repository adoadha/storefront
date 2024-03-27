export function currencyFormat(num = 0, format = "Rp"): string {
  const formattedNumber = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);

  return formattedNumber.replace(" ", "");
}
