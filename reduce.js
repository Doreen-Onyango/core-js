const fold = (arr, fn, acc) => {
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

// FoldRight function
const foldRight = (arr, fn, acc) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

// Reduce function
const reduce = (arr, fn) => {
  if (arr.length < 1) throw new Error("Array must have at least one element");
  let acc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

// ReduceRight function
const reduceRight = (arr, fn) => {
  if (arr.length < 1) throw new Error("Array must have at least one element");
  let acc = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

// const adder = (a, b) => a + b;

// console.log(fold([1, 2, 3], adder, 2));
// console.log(foldRight([1, 2, 3], adder, 2));
// console.log(reduce([1, 2, 3], adder));
// console.log(reduceRight([1, 2, 3], adder));