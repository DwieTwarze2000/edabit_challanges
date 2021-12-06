// Arrays can be mixed with various types.
// Your task for this challenge is to sum all the number elements in the given array.
// Create a function that takes an array and returns the sum of all numbers in the array.
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3
// numbersSum([true, false, "123", "75"]) ➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

const numbersSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            sum += arr[i];
        }
    }
    return sum;
};
console.log(numbersSum([1, 2, '13', '4', '645']));
