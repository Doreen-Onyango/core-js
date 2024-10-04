// Array.prototype.reverse = undefined

function reverse(arr) {
    if (typeof arr !== 'string' && !Array.isArray(arr)) {
        throw new Error("Input must be a string or an array");
    }
    const reversedArr = [];
    if (typeof arr === 'string' && !Array.isArray(arr)) {
        for (let i = arr.length - 1; i >= 0; i--) {
            reversedArr.push(arr[i])
        }
        return typeof arr === 'string' ? reversedArr.join('') : reversedArr.join(',')

    } else if (Array.isArray(arr)) {
        let result = [];
        for (let i = arr.length-1; i >= 0; i--) {
            result.push(arr[i]);
        }
        return result;
    }
}

let arr = "[1, 2, 3, 4]";
console.log(reverse(arr))