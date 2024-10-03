// Math.round = Math.ceil = Math.floor = Math.trunc = undefined

function multiply(a, b) {
    let result = 0;
    const isNeg = (b < 0);
    b = Math.abs(b)

    for (let i = 0; i < b; i++) {
        result += a;
    }
    return isNeg ? -result : result;
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
    return isNeg ? -c : c;
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error("no modulo by zero");
    }
    const divResult = divide(a, b);
    return a - multiply(divResult, b);
}

function round(num) {
    if (typeof num !== 'number' || num !== num) { 
        return 'Error: Input must be a valid number';
    }

    const isNeg = num < 0;
    num = isNeg ? -num : num;

    const roundedValue = (num + 0.5) | 0; 
    return isNeg ? -roundedValue : roundedValue;
}

function ceil(num) {
    if (typeof num !== 'number' || num !== num) { 
        return 'Error: Input must be a valid number';
    }

    const isNeg = num < 0;

    if (isNeg) {
        return num | 0; 
    } else {
        return num === (num | 0) ? num : (num | 0) + 1; 
    }
}

function floor(num) {
    const isNeg = num < 0;

    if (!isNeg) {
        return num | 0; 
    } else {
        return (num | 0) - (modulo(num, 1) !== 0 ? 1 : 0);
    }

}

function trunc(num) {
    return num < 0 ? (- Math.abs(num) | 0) : (num | 0);
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