// Given a number, return a string of the word "Boom", which varies in the following ways:
// The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
// If n is evenly divisible by 5, return the string in ALL CAPS.
// If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// The example below should help clarify these instructions.
// boomIntensity(4) ➞ "Boooom!"
// boomIntensity(1) ➞ "boom"
// boomIntensity(5) ➞ "BOOOOOM"
// boomIntensity(10) ➞ "BOOOOOOOOOOM!"

const boomIntensity = (num) => {
    if (num <= 1) {
        return 'boom';
    }
    result = 'B' + 'o'.repeat(num) + 'm';
    if (num % 2 == 0) {
        result = result + '!';
    }
    if (num % 5 == 0) {
        result = result.toUpperCase();
    }
    return result;
};
console.log(boomIntensity(4));
