export function formatToAmPm(time: string): string {
  if (!time || !time.includes(":")) return time;

  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  hour = hour ? hour : 12;

  const formattedHour = hour.toString().padStart(2, "0");
  return `${formattedHour}:${minuteStr} ${ampm}`;
}
