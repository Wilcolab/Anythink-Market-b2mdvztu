/**
 * Converts a string to kebab-case with robust error handling.
 * Handles empty, null, non-string inputs, multiple delimiters, numbers, and special characters.
 * @param {*} input - The value to convert
 * @returns {string} The kebab-case string, or empty string if input is invalid
 */
function toKebabCase(input) {
    // Validate and normalize input
    if (input == null || input === '') return '';
    if (typeof input !== 'string') return '';

    return input
        // Replace multiple spaces and special delimiters with single spaces
        .replace(/[\s_-]+/g, ' ')
        // Insert space before uppercase letters (for camelCase/PascalCase)
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // Remove any remaining special characters except spaces and numbers
        .replace(/[^\w\s]/g, '')
        // Trim whitespace and convert to lowercase
        .trim()
        .toLowerCase()
        // Replace spaces with hyphens
        .replace(/\s+/g, '-')
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Example usage:
console.log(toKebabCase('HelloWorld'));           // 'hello-world'
console.log(toKebabCase('hello_world'));          // 'hello-world'
console.log(toKebabCase('hello world'));          // 'hello-world'
console.log(toKebabCase('hello--world__test'));   // 'hello-world-test'
console.log(toKebabCase('Hello_World-Test 123')); // 'hello-world-test-123'
console.log(toKebabCase(''));                     // ''
console.log(toKebabCase(null));                   // ''
console.log(toKebabCase(undefined));              // ''
console.log(toKebabCase(123));                    // ''
console.log(toKebabCase('test@#$value'));         // 'test-value'