function filter(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
function reject(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
function partition(arr, predicate) {
  const pass = [];
  const fail = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      pass.push(arr[i]);
    } else {
      fail.push(arr[i]);
    }
  }
  
  return [pass, fail];
}

const numbers = [1, 2, 3, 4, 5];

// Using the custom filter function
const evens = filter(numbers, (num) => num % 2 === 0);
console.log(evens);

// Using the custom reject function
const odds = reject(numbers, (num) => num % 2 === 0);
console.log(odds);

// Using the custom partition function
const [evenPart, oddPart] = partition(numbers, (num) => num % 2 === 0);
console.log(evenPart);
console.log(oddPart);