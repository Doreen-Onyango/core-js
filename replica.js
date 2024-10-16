function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item) && !(item instanceof RegExp));
  }

function replica(target, ...sources) {
    for (const source of sources) {
        const keys = Object.keys(source);
        for (const key of keys) {
            const sourceValue = source[key];
            if (isObject(sourceValue)) {
                if (!target.hasOwnProperty(key) || !isObject(target[key])) {
                    target[key] = {};
                }
                replica(target[key], sourceValue);
            } else {
                target[key] = sourceValue;
            }
        }
    }
    return target;
}


// Original target object
const target = {
    name: "Luke",
    details: {
        age: 23,
        hobbies: ["piloting"]
    }
};

// Source objects
const source1 = {
    details: {
        hobbies: ["lightsaber training"],
        location: "Tatooine"
    },
    forceUser: true
};

const source2 = {
    name: "Anakin",
    details: {
        age: 22,
        skills: {
            piloting: 95,
            combat: 90
        }
    }
};

// Use the replica function to merge sources into target
const result = replica(target, source1, source2);

// Log results
console.log("Target Object after Merging:", JSON.stringify(result, null, 2));
console.log("Final Output:", JSON.stringify(result, null, 2));

// Verify if the original target is modified
console.log("Is original target modified?", target !== result);