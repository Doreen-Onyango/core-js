const input = process.argv[2];
let arr = input.split(' ')
let arr1 = []
for (let i = 0; i <= arr.length -1; i++) {
    let l = arr[i].length
    let le = Math.round(l/2)
    arr1.push(arr[i].slice(le) + arr[i].slice(0, le))
}
console.log(arr1.join(' '));

// const result = veryDisco("Discovery");
// console.log(result);