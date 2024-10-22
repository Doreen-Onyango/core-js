const input = process.argv[2];
const veryDisco = (str) => {
  return str.split(' ').map(word => {
    const midIndex = Math.ceil(word.length / 2);
    const firstPart = word.slice(0, midIndex);
    const secondPart = word.slice(midIndex);
    return secondPart + firstPart;
  }).join(' ');
};

const result = veryDisco("Discovery");
console.log(result);
