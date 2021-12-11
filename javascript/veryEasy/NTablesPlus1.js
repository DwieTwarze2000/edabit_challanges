// Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, separated by commas.
// nTablesPlusOne(7) ➞ "8,15,22,29,36,43,50,57,64,71"
// nTablesPlusOne(1) ➞ "2,3,4,5,6,7,8,9,10,11"

const nTablesPlusOne = (num) => {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        result.push(i * num + 1);
    }
    return result.join(',');
};
