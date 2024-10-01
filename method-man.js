let splt = "hello there how are you"
let low = "HELLO THERE HOW ARE YOU"
let arr = [ 'hello', 'there', 'how', 'are', 'you' ]
function words (splt) {
    return splt.split(" ")
}
function sentence (arr) {
    return arr.join(" ")
}
function yell (splt) {
    return splt.toUpperCase()
}
function whisper (low) {
    const newLow = low.toLowerCase();
    return `*${newLow}*`;
}
function capitalize (low) {
    return low.charAt(0).toUpperCase() + low.slice(1).toLowerCase();
} 
console.log(words(splt))
console.log(sentence(arr))
console.log(yell(splt))
console.log(whisper(low))
console.log(capitalize(low))