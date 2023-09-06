const formatCurrentDay = (numero: number) : string => {
    return numero < 10 ? `0${numero}` : `${numero}`;
}

export const getCurrentDate = () => {

    const currentDate = new Date();

    const day = formatCurrentDay(currentDate.getDate());
    const month = currentDate.toLocaleDateString('default', { month: 'short' }); 
    const year = currentDate.getFullYear();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    return { day, month, year, dayOfWeek };
}