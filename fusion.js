function fusion(obj1, obj2) {
    const result = { ...obj1 };

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            const value1 = obj1[key];
            const value2 = obj2[key];
            // concatenate
            if (Array.isArray(value1) && Array.isArray(value2)) {
                result[key] = [...value1, ...value2];

                // concatenate with space
            } else if (typeof value1 === 'string' && typeof value2 === 'string') {
                result[key] = `${value1} ${value2}`.trim();
                
                // addition
            } else if (typeof value1 === 'number' && typeof value2 === 'number') {
                result[key] = value1 + value2;

                // join recursively
            } else if (typeof value1 === 'object' && value1 !== null && typeof value2 === 'object' && value2 !== null) {
                result[key] = fusion(value1, value2);
                
                // replace with value of second object
            } else {
                result[key] = value2;
            }
        }
    }

    return result;
}

console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); // { arr: [ 1, '2', 2 ] }
console.log(fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] })); // { arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
console.log(fusion({ str: "salem" }, { str: "alem" })); // { str: 'salem alem' }
console.log(fusion({ str: "salem" }, { str: "" })); // { str: 'salem ' }
console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })); // { a: 20, b: 10, c: 1 }
console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })); // { a: 11, x: [], b: { c: 'Salem alem' } }
console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } }, { a: { b: [0, 3, 1], c: { d: 3 } } })); // { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
console.log(fusion({ a: "hello", b: [] }, { a: 4 })); // { a: 4, b: [] }
