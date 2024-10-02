const is = {};

is.num = function (n) {
    return typeof n === "number";
};

is.nan = function (n) {
    return Number.isNaN(n);
};

is.str = function (s) {
    return typeof s === "string";
};

is.bool = function (b) {
    return typeof b === "boolean";
};

is.undef = function (u) {
    return typeof u === "undefined";
};

is.def = function (d) {
    return typeof d !== "undefined";
};

is.arr = function (a) {
    return Array.isArray(a);
};

is.obj = function (o) {
    return o !== null && typeof o === "object" && !Array.isArray(o);
};

is.fun = function (f) {
    return typeof f === "function";
};

is.truthy = function (t) {
    return !!t;
};

is.falsy = function (f) {
    return !f;
};

console.log(is.bool(true))
console.log(is.nan('2e'))
console.log(is.str("hello"))