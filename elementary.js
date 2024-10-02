// Math.imul = undefined

function multiply(a, b) {
    let result = 0;
    const isNeg = (b < 0);
    b = Math.abs(b)

    for (let i = 0; i < b; i++) {
        result += a;
    }
    return isNeg? -result : result;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("no division by zero");
    }
    let c = 0
    const isNeg = ((a < 0) !== (b < 0))
    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a -= b;
        c++;
    }
    return isNeg? -c : c;
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error("no modulo by zero");
    }
      const divResult = divide(a, b);
    return a - multiply(divResult, b);
}
console.log(multiply(2, -5))
console.log(divide(18, -3))
console.log(modulo(10, 3))