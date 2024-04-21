const currentDate = new Date();

const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const formattedDate = {
  weekday: day[currentDate.getDay()],
  day: currentDate.getDate(),
  month: month[currentDate.getMonth()],
  year: currentDate.getFullYear(),
};
