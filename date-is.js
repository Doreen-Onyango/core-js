// Check if a date is valid
function isValid(date) {
    if (new Date(date).toString() === "Invalid Date") {
        return false;
    }
    if (!(date instanceof Date) && typeof date !== "number") {
        return false;
    }
    return true;
}

function isBefore(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) {
        return false;
    } 
    return date1 < date2;
}

function isFuture(date) {
    if (!isValid(date)) {
        return false;
    }
    const now = new Date();
    return date > now;
}

function isPast(date) {
    if (!isValid(date)) {
        return false;
    }
    const now = new Date();
    return date < now;
}

const now = new Date();
const futureDate = new Date(now.getTime() + 10000);
const pastDate = new Date(now.getTime() - 10000);

console.log(isValid(now));
console.log(isPast(futureDate, now));
console.log(isBefore(pastDate, now));
console.log(isFuture(futureDate));

