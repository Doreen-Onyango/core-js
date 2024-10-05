const vowels = /[aeiou]/gi;

function vowelDots(str) {
  return str.replace(vowels, match => match + '.');
}
// console.log(vowelDots("hello"))