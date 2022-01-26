const today = new Date();

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'];

export function getDayName() {
  const numericDay = today.getDay();
  return days[numericDay - 1];
}

export function getMonth() {
  const numericMonth = today.getMonth();
  return months[numericMonth];
}

export const year = today.getFullYear();
export const numericDay = today.getDate();
