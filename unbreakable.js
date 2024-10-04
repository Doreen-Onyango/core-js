function split(str, delimiter) {
    // Check if the delimiter is an empty string
    if (delimiter === '') {
        return str.split('').map(char => char); // Return each character as an array element
    }

    const result = [];
    let currentIndex = 0;

    while (currentIndex < str.length) {
        // Find the next occurrence of the delimiter
        const delimiterIndex = str.indexOf(delimiter, currentIndex);

        if (delimiterIndex === -1) {
            // If no more delimiters are found, push the remaining part of the string
            result.push(str.slice(currentIndex));
            break;
        }

        // Push the substring before the delimiter
        result.push(str.slice(currentIndex, delimiterIndex));

        // Move currentIndex past the delimiter
        currentIndex = delimiterIndex + delimiter.length;
    }

    // Check if we need to add an empty string at the end
    if (currentIndex > 0 && currentIndex === str.length) {
        result.push('');
    }

    // Handle case for consecutive delimiters
    const delimiterCount = (str.split(delimiter).length - 1); // Count occurrences of the delimiter
    if (delimiterCount > 0 && result.length <= delimiterCount) {
        return Array(delimiterCount + 1).fill(''); // Return an array filled with empty strings
    }

    return result; // Return the final array of split parts
}

// Example usage of split function
console.log(split("a b c", " "));      // Output: ['a', 'b', 'c']
console.log(split("rrrr", "rr"));       // Output: ['', '', '']
console.log(split("one|two|three", "|"));// Output: ['one', 'two', 'three']
console.log(split("test", ""));         // Output: ['t', 'e', 's', 't']
