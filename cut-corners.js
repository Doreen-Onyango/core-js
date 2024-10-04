// Math.round = Math.ceil = Math.floor = Math.trunc = undefined

function checkInt(num) {
    const sign = num >= 0 ? 1 : -1;
    num = Math.abs(num)

    let placeValue = 1
    let result = 0

    while (placeValue <= num) {
        placeValue *= 10
    }
    placeValue /= 10

    while (placeValue >= 1) {
        while (result + placeValue <= num) {
            result += placeValue
        }
        placeValue /= 10
    }
    return sign * result
}
function round(num) {
   let newInt = checkInt(num)
   let dec = Math.abs(num-newInt)
   if (dec < 0.5) {
    return newInt
   }
   return num >= 0 ? newInt+1 : newInt-1
}

function ceil(num) {
    let newInt = checkInt(num)
    if (num === newInt) {
        return num
    }
    return num> 0? newInt+1 : newInt
}

function floor(num) {
    let newInt = checkInt(num)
    if (num === newInt) {
        return num
    }
    return num  > 0 ? newInt : newInt-1
}

function trunc(num) {
    return checkInt(num)
}

// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))
// [ 4, -4, 3, -3 ]
// [ 3, -4, 3, -4 ]
// [ 3, -3, 3, -3 ]
// [ 4, -3, 4, -3 ]