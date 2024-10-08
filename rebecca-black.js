function isFriday(date) {
    return new Date(date).getDay() === 5;
}

function isWeekend(date) {
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
}

function isLeapYear(date) {
    const year = new Date(date).getFullYear();
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function isLastDayOfMonth(date) {
    const d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate() === d.getDate();
}
console.log(isFriday('2024-03-15'));
console.log(isFriday('2024-03-16'));
console.log(isWeekend('2024-03-16'));
console.log(isWeekend('2024-03-15'));
console.log(isLeapYear('2024-03-16'));
console.log(isLeapYear('2023-03-16')); 
console.log(isLastDayOfMonth('2024-02-29'));
console.log(isLastDayOfMonth('2024-03-30'));