function filterKeys(obj, callback) {
    let filtered = {}
    for (const key in obj) {
        if (callback(key)) {
            filtered[key] = obj[key]
        }
    }
    return filtered
}

function mapKeys(obj, callback) {
    let mapped = {}
    for (const key in obj) {
        mapped[callback(key)] = obj[key]
        
    }
    return mapped
}

function reduceKeys(obj, callback, initialValue) {
    let str
    if (initialValue === undefined) {
        str = ""
    } else {
        str = initialValue
    }
    
    for(const key in obj) {
        if (str === "") {
            str = key
        } else {
            str = callback(str, key)
        }
    }
    return str
}

// const nutritionDB = {
//         tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//         vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//         oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//         onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//         garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//         paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//         sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//         orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//       }