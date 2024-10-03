// Math.round = Math.ceil = Math.floor = Math.trunc = undefined

function round(num) {
    return num < 0 ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
}

function ceil(num) {
     return (num === Math.floor(num)) ? num : Math.floor(num) + 1;
}

function floor(num) {
     return (num < 0 && num !== Math.floor(num)) ? Math.floor(num) : Math.floor(num);
}

function trunc(num) {
      return (num < 0) ? Math.ceil(num) : Math.floor(num);
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