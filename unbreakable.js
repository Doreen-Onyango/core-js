function split(str, delimiter) {
    if (delimiter === '') {
        return str;
    }

    const result = [];
    let currentIndex = 0;

    while (currentIndex < str.length) {
        const delimiterIndex = str.indexOf(delimiter, currentIndex);

        if (delimiterIndex === -1) {
            result.push(str.slice(currentIndex));
            break;
        }

        result.push(str.slice(currentIndex, delimiterIndex));

        currentIndex = delimiterIndex + delimiter.length;
    }

    if (currentIndex > 0 && currentIndex === str.length) {
        result.push('');
    }

    const delimiterCount = (str.match(new RegExp(delimiter, 'g')) || []).length;
    if (delimiterCount > 0 && result.length <= delimiterCount) {
        return Array(delimiterCount).fill('');
    }

    return result;
}

// console.log(split("rrrr", "rr"));
// console.log("rrrr".split("rr"));