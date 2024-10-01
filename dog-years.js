function dogYears (pName, age) {
    const orbit = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars:  1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};
const ageSec = 31557600 ;
const ageYr = age/ageSec;

if (orbit[pName]) {
const pYrs = ageYr/orbit[pName];
const dogYrs = pYrs * 7;
return parseFloat(dogYrs.toFixed(2))
} 
}
console.log(dogYears('earth', 1000000000))