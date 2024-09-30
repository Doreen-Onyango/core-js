const escapeStr = "\`\\\/\"\'"
const arr = [4, undefined, '2']
const obj = {'str': "string", 'num': 10, 'bool': true, 'undef': undefined}
const nested = {
   arr: [4, undefined, '2'],
   obj: {'str': 'string', 'num': 10, 'bool': true}
}
Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)