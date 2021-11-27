const today = new Date();

export const day = today.getDay();

const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug",
"Sep", "Oct", "Nov", "Dec"];

export function getMonth() {
  const numericMonth = today.getMonth();
  return months[numericMonth];
}

export const year = today.getFullYear();
