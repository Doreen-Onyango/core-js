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
function capitalize (splt) {
    return splt.charAt(0).toUpperCase() + splt.slice(1);
} 
console.log(words(splt))
console.log(sentence(arr))
console.log(yell(splt))
console.log(whisper(low))
console.log(capitalize(splt))