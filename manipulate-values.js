function filterValues(arr, callback) {
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filtered.push(arr[i])
        }
    }
    return filtered
}

function mapValues(arr, callback) {
    const mapped = [];
        for (let i = 0; i < arr.length; i++) {
            mapped[i] = callback(arr[i], i, arr);
        }
        return mapped;
}

function reduceValues(arr, callback, initialValue) {
    let accumulator = initialValue;

    let startIndex = 0;

    if (initialValue === undefined) {
        if (arr.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = arr[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr); 
    }

    return accumulator; 
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