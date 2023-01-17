import dayjs from 'dayjs';

type ActualDateResponse = {
  day: string
  month: string
  year: string,
  weekday: string
};

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function actualDate(): ActualDateResponse {
  const date = dayjs().format('DD-MMMM-YYYY');
  const [day, month, year] = date.split('-');

  return {
    day,
    month: month.slice(0, 3),
    year,
    weekday: week[dayjs().day()]
  };
}