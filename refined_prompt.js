/**
 * Converts a given string to camelCase format.
 * @param {string} input - The string to convert.
 * @returns {string} - The camelCased string.
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim the input and handle empty string
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) {
        return '';
    }

    // Replace common delimiters with spaces, then split into words
    const words = trimmedInput
        .replace(/[\s_]+/g, ' ') // Replace spaces and underscores
        .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
        .split(' ');

    // Convert to camelCase
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word in lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize subsequent words
        })
        .join('');
}
/**
 * Converts a given string to dot.case format.
 * @param {string} input - The string to convert.
 * @returns {string} - The dot.cased string.
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim the input and handle empty string
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) {
        return '';
    }

    // Replace common delimiters with spaces, then split into words
    const words = trimmedInput
        .replace(/[\s_]+/g, ' ') // Replace spaces and underscores
        .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
        .split(' ');

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase()) // Convert all words to lowercase
        .join('.'); // Join words with dots
}
I
// Example tests for edge cases
console.log(toCamelCase('hello world')); // helloWorld
console.log(toCamelCase('  mixed CASE   example ')); // mixedCaseExample
console.log(toCamelCase('special@characters!')); // specialcharacters
console.log(toCamelCase('123 numbers 456')); // 123Numbers456
console.log(toCamelCase('')); // ''
console.log(toCamelCase(null)); // Throws TypeError
console.log(toCamelCase(123)); // Throws TypeError

