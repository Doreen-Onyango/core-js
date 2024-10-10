const map = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

// Custom flatMap function
const flatMap = (arr, callback) => {
  return arr.reduce((acc, currentValue, index, array) => {
    const mapped = callback(currentValue, index, array);
    return acc.concat(mapped);
  }, []);
};

const numbers = [1, 2, 3];

const doubled = map(numbers, (num) => num * 2);
console.log(doubled);
const nestedArray = [1, 2, 3];
const flatMapped = flatMap(nestedArray, (num) => [num, num * 2]);
console.log(flatMapped);