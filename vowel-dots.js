const vow = /[aeiou]/gi;

function vowelDots(str) {
  return str.replace(vow, match => match + '.');
}
// console.log(vowelDots("hello"))