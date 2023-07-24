export default function addPercentage(number, percentage) {
  const decimalPercentage = percentage / 100;
  const result = number * (1 + decimalPercentage);
  return Math.floor(result);
}
