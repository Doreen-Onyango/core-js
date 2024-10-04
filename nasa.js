function nasa(N, cur) {
    if (cur > N) {
        return '';
    }
    let result= "";
    if (cur % 3 === 0 && cur % 5 === 0) {
        result = 'NASA';
    } else if (cur % 3 === 0) {
        result = 'NA';
    } else if (cur % 5 === 0) {
        result = 'SA';
    } else {
        result = cur.toString();
    }
    return result + (cur < N ? ' ' : '') + nasa(N, cur + 1);
}
console.log(nasa(15, 1))