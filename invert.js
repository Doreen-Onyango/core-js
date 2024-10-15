function invert(obj) {
    const inverted = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted
}

const obj = {a : 1, b : 3, c : 6}
console.log(invert(obj))