Array.prototype.slice = undefined
String.prototype.slice = undefined

let arr = ['hello', 'there', 'how', 'are', 'you']
let str = "abcdef there"
function slice(arr, start, end) {
    const l= arr.length;

    if (start < 0) { 
        start = Math.max(0, l + start);
    } else {
       start = Math.min(l, start);
    }

    if (end === undefined) {
        end = l;
    } else if (end < 0) {
        end = Math.max(0, l + end);
    } else {
        end = Math.min(l, end);
    }
    let result;

    if (typeof arr === 'string') {
        result = '';
        for (let i = start; i < end; i++) {
            result += arr[i];
        }
    } else if (Array.isArray(arr)) {
        result = [];
        for (let i = start; i < end; i++) {
            result.push(arr[i]);
        }
    } else {
        throw new TypeError('Input must be a string or an array.');
    }
    return result;
}
console.log(slice(arr, 2))
console.log(slice(arr, 2, 4))
console.log(slice(str, 0, 2))

