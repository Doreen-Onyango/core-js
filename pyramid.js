function pyramid(char, h) {
    let result = '';
    for (let i = 1; i <= h; i++) {
        const spaces = ' '.repeat(h - i);
        const chars = char.repeat(2 * i - 1);
        result += spaces + chars;
        if (i !== h) {
            result += '\n';
        }
    }
    return result;
}
console.log(pyramid('*', 8));
