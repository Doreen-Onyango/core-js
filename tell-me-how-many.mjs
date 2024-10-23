import fs from "fs/promises";

let input = process.argv[2]
if (input === undefined) {
    input = process.argv[1]
}
const data = await fs.readdir(input, "utf8")

console.log(data.length)