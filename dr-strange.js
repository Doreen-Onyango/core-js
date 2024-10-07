function addWeek(date) {
    const epoch = new date('0001-01-01');
    const timeDif = date - epoch;
    const dayFromEpoch = Math.floor(timeDif/(1000 *60*60*24));
    const newDayInd = dayFromEpoch % 14;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];
    return days[newDayInd];
}

function timeTravel() {

    }