function dayOfTheYear(date) {
    let days = date.getDate();
    let currentMonth = date.getMonth();

    while (currentMonth > 0) {
        currentMonth--;
        const tempDate = new Date(date.getFullYear(), currentMonth + 1, 0);
        days += tempDate.getDate();
    }
    return days;
}
const date = new Date('2024-10-08');
console.log(dayOfTheYear(date));
