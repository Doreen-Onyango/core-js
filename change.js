// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
// }
// const get = (num) => sourceObject[num];
function get(net) {
    return sourceObject.net;
}

// console.log(get(sourceObject.num));
// const set = (num, value) => sourceObject.num = value;
function set(value, net) {
    sourceObject.value = net;
    return net;
}
// console.log(set(sourceObject.num, 32))

