function adder(numbers, initialValue = 0) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}

function sumOrMul(numbers, initialValue = 0) {
  return numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 1) {
      // If the number is odd, add it
      return accumulator + currentValue;
    } else {
      // If the number is even, multiply it
      return accumulator * currentValue;
    }
  }, initialValue);
}

function funcExec(functions, initialValue) {
  return functions.reduce((accumulator, currentFunction) => {
    return currentFunction(accumulator);
  }, initialValue);
}


console.log(adder([1, 2, 3, 4]));

console.log(sumOrMul([1, 2, 3, 5, 8], 5));

const functions = [(x) => x + 2, (x) => x * 3, (x) => x - 1];

console.log(funcExec(functions, 5));