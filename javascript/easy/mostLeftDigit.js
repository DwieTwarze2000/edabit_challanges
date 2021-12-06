// Write a function that takes a string as an argument and returns the left most digit in the string.
// leftDigit("TrAdE2W1n95!") ➞ 2
// leftDigit("V3r1ta$") ➞ 3
// leftDigit("U//DertHe1nflu3nC3") ➞ 1
// leftDigit("J@v@5cR1PT") ➞ 5

const leftDigit = (string) => {
    for (let i = 0; i <= string.length; i++) {
        if (!isNaN(string[i])) {
            return parseInt(string[i]);
        }
    }
};
console.log(leftDigit('U//DertHe1nflu3nC3'));
