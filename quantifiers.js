function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
function some(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
function none(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}


const numbers = [1, 2, 3, 4, 5];

console.log(every(numbers, (num) => num > 0));
console.log(every(numbers, (num) => num > 2));

console.log(some(numbers, (num) => num % 2 === 0));
console.log(some(numbers, (num) => num > 5));

console.log(none(numbers, (num) => num > 5));
console.log(none(numbers, (num) => num % 2 === 0));