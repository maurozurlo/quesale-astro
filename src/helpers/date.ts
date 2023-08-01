export function formatDate(date) {
    const daysOfWeek = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
    const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  
    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
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

  