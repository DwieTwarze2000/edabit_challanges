// Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0

const countTrue = (arr) => {
    return arr.filter((x) => x === true).length;
};

console.log(countTrue([true, false, false, true, false]));
