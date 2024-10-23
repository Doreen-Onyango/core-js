import fs from "fs/promises"

let input = process.argv[2]
if (input === undefined) {
    input = process.argv[1]
}

const data = await fs.readdir(input, "ut8")
let arr = []

for (let i = 0; i <= data.length - 1; i++) {
    let s = data[i].replace(/\.json$/, "") 
    let a = s.split("_")
    arr.push(a[1] + " " + a[0])
}

arr.sort()

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(String(i + 1) + ". " + arr[i])
}