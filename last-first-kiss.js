let arr = ['hello', 'there', 'how', 'are', 'you']
const first = (arr) => arr[0];
console.log(first(arr));
const last = (arr) => arr[arr.length-1];
console.log(last(arr))
const kiss = arr => [arr[arr.length - 1], arr[0]];
console.log(kiss(arr))
