// Array.prototype.reverse = undefined

let str = "54321"
function reverse(arr) {
    if (typeof arr !== 'string' && !Array.isArray(input)) {
        throw new Error("Input must be a string or an array");
    }
    const reversedArr = [];

    for (let i = arr.length-1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return typeof arr === 'string' ? reversedArr.join('') : reversedArr
}

console.log(reverse(str))