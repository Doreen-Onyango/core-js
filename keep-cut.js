
function cutFirst(str) {
    return str.length > 2 ? str.slice(2) : ''; 
}
function cutLast(str) {
    return str.length > 2 ? str.slice(0, -2) : '';
}
function cutFirstLast(str) {
    return str.length >= 4 ? str.slice(2, -2) : '';
}
function keepFirst(str) {
    return str.length >= 1 ? str.slice(0, 2) : '';
}
function keepLast(str) {
    return str.length > 2 ? str.slice(-2) : '';
}
function keepFirstLast(str) {
    return str.length > 4 ? str.slice(0, 2) + str.slice(-2) : '';

}
console.log(cutFirst("hello"))
console.log(cutLast("helloyou"))
console.log(cutFirstLast("hellothere"))
console.log(keepFirst("how"))
console.log(keepLast("hello"))
console.log(keepFirstLast("hellothere"))
