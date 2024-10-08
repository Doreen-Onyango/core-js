function countLeapYears(date) {
    let years = 0;
    for (let yr = 1; yr < date.getFullYear(); yr++) {
        if (yr % 4 === 0 && (yr % 100 !== 0 || yr % 400 === 0)) {
            years++;
        }
    }
    return years;
}