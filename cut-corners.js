// Math.round = Math.ceil = Math.floor = Math.trunc = undefined

function round(num) {
     return num < 0 ? -(Math.abs(num) + 0.5 | 0) : (num + 0.5) | 0;
}

function ceil(num) {
     return num === (num | 0) ? num : (num < 0 ? num | 0 : (num | 0) + 1);
}

function floor(num) {
    return num > 0 ? ((-num) | 0) * -1 : (num | 0);
}

function trunc(num) {
      return num < 0 ? -(Math.abs(num) | 0) : (num | 0);
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