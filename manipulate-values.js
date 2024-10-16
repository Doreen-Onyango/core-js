function filterValues(obj, callback) {
    const filtered = {};
    for ( const [key, value] of Object.entries(obj)) {
        if (callback(value)) {
            filtered[key] = value
        }
    }
    return filtered
}

function mapValues(obj, callback) {
    const mapped = {};
    for ( const [key, value] of Object.entries(obj)) {
       mapped[key] = callback(value) 
    }
    return mapped

}

function reduceValues(obj, callback, initialValue = 0) {
    let reduced = initialValue
    for ( const value of Object.values(obj)) {
        reduced = callback(reduced, value)
    }
    return reduced;

}

// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }
//   const entries = Object.entries(nutritionDB);

//  console.log(filterValues(entries, ([item, data]) => data.calories < 10));
// console.log(mapValues(entries, ([item, data]) => data.calories < 10))