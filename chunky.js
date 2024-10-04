function chunk(arr, size) {
      const result = [];

    for (let i = 0; i < arr.length; i += size) {
        const subArr = arr.slice(i, i + size);
        result.push(subArr);
    }
    return result; 
}
let arr = [1, 2, 3, 4, 5]
console.log(chunk(arr, 3))