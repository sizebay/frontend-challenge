let date = new Date();

const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const formattedDate = date.toLocaleDateString('en-US', options);

export const [dayOfWeek, month, day, year] = formattedDate.split(/,?\s+/);
