// Create a function that takes an integer and returns the factorial of that integer.
// That is, the integer multiplied by all positive lower integers.
// Assume all inputs are greater than or equal to 0.
// factorial(3) ➞ 6
// factorial(5) ➞ 120
// factorial(13) ➞ 6227020800

const factorial = (num) => {
    if (num == 1) return 1;
    return num * factorial(num - 1);
};

const factorial2 = (num) => {
    s = 1;
    for (i = num; i > 0; i--) {
        s *= i;
    }
    return s;
};
