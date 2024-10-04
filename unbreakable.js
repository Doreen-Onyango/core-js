// String.prototype.split = undefined
// String.prototype.match = undefined
// RegExp.prototype.exec = undefined
// Array.prototype.join = undefined

function split(str, sep) {
    let result = [];
    let curStrIndex = '';

    if (sep === "") {
        for (let i = 0; i < arr.length; i++) {
            result.push(str[i])
        }
        return result
    }
    for (let i = 0; i <= str.length; i++) {
        if (i === str.length || str[i] === sep[0]) {
            let match = true;
            for (let j = 0; j < sep.length; j++) {
                if (str[i+j] !== sep[j]) {
                    match= false
                    break
                }
            }
            if (match) {
                result.push(str.slice(curStrIndex, i));
                curStrIndex =i + sep.length
                i+= sep.length-1
            }
        }
    }
    result.push(str.slice(curStrIndex));
    return result
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

// let arr = ["hello", "there", "how", "are", "you"]
// console.log(split("a b c", " "));
// console.log(split(arr, ","))

