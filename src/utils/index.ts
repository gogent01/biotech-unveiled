export function isValidDateString(dateStr: unknown): dateStr is string {
  return typeof dateStr === "string" && !isNaN(Date.parse(dateStr));
}

export function toShortMonthDay(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "2-digit",
  }).format(new Date(date));
}

export function toLongMonthDayYear(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(date));
}
