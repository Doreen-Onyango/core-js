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
    let pattern = new RegExp(/delimiter/, 'g');
    let matches = str.match(pattern);
    // (str.match(new RegExp(delimiter, 'g')) || []).length;
    if (matches) {
        const delimiterCount = /delimiter/g.length;
        if (delimiterCount > 0 && result.length <= delimiterCount) {
            return Array(delimiterCount).fill('');
        } else {
            const delimiterCount = 0;
            if (delimiterCount > 0 && result.length <= delimiterCount) {
                return Array(delimiterCount).fill('');
            }
        }
    }

    return result;
}

// console.log(split("a b c", " "));
// console.log("rrrr".split("rr"));