import fs from "fs/promises";
import path from "path";

let input = process.argv[2];
if (input === undefined) {
  input = process.argv[1];
}

try {
  const data = await fs.readdir(input, "utf8");
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (await saidYes(path.join(input, data[i]))) {
      let s = data[i].replace(/\.json$/, "");
      let [lastName, firstName] = s.split("_");
      arr.push(`${firstName} ${lastName}`);
    }
  }
  arr.sort()

  let s = arr.map((name, index) => `${index + 1}. ${name}`).join("\n");

  await fs.writeFile("vip.txt", s);
  console.log(s); 
} catch (err) {
  console.error("Error:", err);
}
