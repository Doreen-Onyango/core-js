const is = {
    num: value => typeof value === 'number',
    nan: value => Number.isNaN(value),
    str: value => typeof value === 'string',
    bool: value => typeof value === 'boolean',
    undef: value => typeof value === 'undefined',
    def: value => typeof value !== 'undefined',
    arr: value => Array.isArray(value),
    obj: value => value !== null && typeof value === 'object',
    fun: value => typeof value === 'function',
    truthy: value => !!value,
    falsy: value => !value
};

console.log(is.num(34))
console.log(is.bool(true))