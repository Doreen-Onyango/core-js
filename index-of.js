// Array.prototype.indexOf = undefined
// Array.prototype.lastIndexOf = undefined
// Array.prototype.includes = undefined

let arr = ['hello', 'there', 'how', 'are', 'you', 'are']
function indexOf(arr, value, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = Math.max(0, arr.length + fromIndex);
    }

    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
    if (fromIndex < 0) {
        fromIndex = Math.max(0, arr.length + fromIndex);
    }

    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=== value) {
            return true
        }
    }
    return false
}

console.log(indexOf(arr, 'are', 4))
console.log(lastIndexOf(arr, 'are'))
console.log(includes(arr, 'hello'))