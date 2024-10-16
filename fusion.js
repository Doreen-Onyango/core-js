function fusion(obj1 = {}, obj2 = {}) {
    let newobj = {};
  
    for (const key in obj1) {
      if (obj1.hasOwnProperty(key)) {

        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          newobj[key] = [...obj1[key], ...obj2[key]];

        } else if (typeof obj1[key] === "string" && typeof obj2[key] === "string") {
          newobj[key] = obj1[key] + " " + obj2[key];

        } else if (typeof obj1[key] === "number" && typeof obj2[key] === "number") {
          newobj[key] = obj1[key] + obj2[key];

        } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object" && obj1[key] !== null && obj2[key] !== null) {
          newobj[key] = fusion(obj1[key], obj2[key]);

        } else if (typeof obj2[key] !== "undefined") {
          newobj[key] = obj2[key];
          
        } else {
          newobj[key] = obj1[key];
        }
      }
    }
    for (const key in obj2) {
      if (obj2.hasOwnProperty(key) && typeof obj1[key] === "undefined") {
        newobj[key] = obj2[key];
      }
    }
    return newobj;
  }

console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); // { arr: [ 1, '2', 2 ] }
console.log(fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] })); // { arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
console.log(fusion({ str: "salem" }, { str: "alem" })); // { str: 'salem alem' }
console.log(fusion({ str: "salem" }, { str: "" })); // { str: 'salem ' }
console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })); // { a: 20, b: 10, c: 1 }
console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })); // { a: 11, x: [], b: { c: 'Salem alem' } }
console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } }, { a: { b: [0, 3, 1], c: { d: 3 } } })); // { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
console.log(fusion({ a: "hello", b: [] }, { a: 4 })); // { a: 4, b: [] }
