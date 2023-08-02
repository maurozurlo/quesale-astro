export function formatDate(date: Date) {
  const dayOfWeek = getWeekDay(date);
  const month = getMonth(date)
  const dayOfMonth = date.getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  let period = 'AM';

  // Convert to 12-hour format and adjust the period
  if (hours >= 12) {
    period = 'PM';
    hours -= 12;
  }

  // Ensure that 12:00 PM and 12:00 AM are correctly displayed
  if (hours === 0) {
    hours = 12;
  }

  return `${dayOfWeek} · ${month} ${dayOfMonth} · ${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function getWeekDay(date: Date) {
  const daysOfWeek = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
  return daysOfWeek[date.getDay()];
}

export function getMonth(date: Date) {
  const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  return months[date.getMonth()];
}

