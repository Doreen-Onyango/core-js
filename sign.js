function sign(num) {
    if (num == 0) {
        return 0
    }
    if (num> 0) {
        return 1
    }
    return -1
}
console.log(sign(0))
function sameSign(a, b) {
    if (sign(a) === sign(b)) {
        return true
    }
    return false
}
console.log(sameSign(-54, 44))