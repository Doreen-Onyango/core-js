// const sourceObject = {
//   num: 42,
//   bool: true,
//   str: 'some text',
//   log: console.log,
// }

function get (key) {
    return sourceObject[key];
}
// console.log(get('num'));
function set(key, value) {
    sourceObject[key] = value;
    return value;
}
// console.log(set('num', 39))

