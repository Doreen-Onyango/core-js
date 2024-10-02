// String.prototype.repeat = undefined
let str = "hello"
function repeat(str, num) {
 if (num < 0 || !Number.isInteger(num)) {
        throw new Error("number is not a positive integer.");
    }
    let result = "";
    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;
}
console.log(repeat(str, 3))