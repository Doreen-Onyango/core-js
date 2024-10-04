function nasa(N) {
 let result = '';
    let cur = 1;

    while (cur <= N) {
        if (cur % 3 === 0 && cur % 5 === 0) {
            result += 'NASA';
        } else if (cur % 3 === 0) {
            result += 'NA';
        } else if (cur % 5 === 0) {
            result += 'SA';
        } else {
            result += cur;
        }
        if (cur < N) {
            result += ' ';
        }
        
        cur++;
    }

    return result;
}
// console.log(nasa(15))