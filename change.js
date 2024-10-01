const get = (bool) => sourceObject.bool;
// function get(net) {
//     return sourceObject.net;
// }

console.log(get(sourceObject.num));
const set = (num, value) => sourceObject.num = 100;
// function set(value, net) {
//     sourceObject.value = net;
//     return net;
// }
console.log(set(sourceObject.num))

