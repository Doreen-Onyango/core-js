function pick(obj, str) {
    const strArr = Array.isArray(str) ? str : [str]
    const pickedObj = {};

    strArr.forEach(key => {
        if (key in obj) {
            pickedObj[key] = obj[key]
        }
    });
    return pickedObj
}

function omit(obj, str) {
    const strArr = Array.isArray(str) ? str : [str]
    const omittedObj = {}

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !strArr.includes(key)) {
            omittedObj[key] = obj[key]
        }
    }
    return omittedObj
}

const obj = {a : 1, b : 4, c : 5, d : 7, e : 3}
console.log(pick(obj, ['a', 'd']))
console.log(omit(obj, ['b', 'e']))