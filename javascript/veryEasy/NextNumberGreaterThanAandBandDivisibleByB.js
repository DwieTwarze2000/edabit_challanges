// You are given two numbers a and b. Create a function that returns the next number greater than a and b and divisible by b.
// divisibleByB(17, 8) ➞ 24
// divisibleByB(98, 3) ➞ 99

const divisibleByB = (a, b) => {
    let n = a > b ? a : b;
    while (n % b != 0) {
        n += 1;
    }
    return n;
};
console.log(divisibleByB(17, 8));
