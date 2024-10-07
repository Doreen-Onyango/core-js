function triangle(ch, h) {
    let result = '';

    for (let i = 1; i <= h; i++) {
        result += ch.repeat(i);
        if (i !== h) {
            result += '\n';
        }
    }
    return result;
}
console.log(triangle('*', 8));