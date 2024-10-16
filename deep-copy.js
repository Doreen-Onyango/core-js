function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj
    }

    if (obj instanceof Date) {
        return new Date(obj)
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags)
    }

    if (Array.isArray(obj)) {
        return obj.map(deepCopy)
    }

    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, deepCopy(value)])
    )
}


// Original object to be deep copied
const original = {
    name: "Luke Skywalker",
    age: 23,
    scores: [98, 56],
    dateOfBirth: new Date('1999-01-01'),
    nested: {
        hobbies: ["piloting", "lightsaber training"],
        details: {
            isForceUser: true,
            master: null,
        },
    },
    regex: /[A-Za-z]/g,
};

// Deep copy the original object
const copied = deepCopy(original);

// Modify the copied object to verify deep copying
copied.name = "Anakin Skywalker";
copied.scores[0] = 100; // Modify array element
copied.nested.details.master = "Obi-Wan Kenobi"; // Change nested object property

// Log results
console.log("Original Object:", JSON.stringify(original, null, 2));
console.log("Copied Object:", JSON.stringify(copied, null, 2));

// Check if the original and copied objects are equal
console.log("Are objects equal?", JSON.stringify(original) === JSON.stringify(copied));