export function getCurrentDate() {
    const date = new Date()
    const dayNumber = date.getDay();
    const dayName = date.toLocaleString('default', { weekday: 'long' });
    const monthNumber = date.getMonth() + 1;
    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return { dayNumber, dayName, monthNumber, monthName, year };
}