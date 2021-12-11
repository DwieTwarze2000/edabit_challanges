// Create a function that takes a string and returns the number (count) of vowels contained within it.
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4

const countVowels = (str) => {
    regex = str.match(/[aeiou]/gi);
    return regex === null ? 0 : regex.length;
};
