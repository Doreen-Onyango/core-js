// String.prototype.split = undefined
// String.prototype.match = undefined
// RegExp.prototype.exec = undefined
// Array.prototype.join = undefined

function split(str, sep) {
    const result = [];
    let curStr = '';

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if (ch === sep) {
            result.push(curStr.trim());
            curStr = '';
        } else {
            curStr += ch;
        }
    }
    if (curStr) {
        result.push(curStr.trim());
    }
    
    return result;
}

function join(arr, sep) {
    let result = '';
    for (let i = 0; i < arr.length; i++){
        result += arr[i]
        
        if (i < arr.length-1) {
            result += sep;
        }
    }
    return result
}
let arr = ['hello', "Dorah"]
let str = 'ggg - ddd - b'
console.log(join(arr, "-"))
console.log(split(str, "-"))