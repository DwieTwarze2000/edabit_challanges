// Create a function that takes in an array and returns an array of the accumulating sum.
// accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
// accumulatingArray([1, 5, 7]) ➞ [1, 6, 13]

const accumulatingArray = (arr) => {
    let result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(sum);
    }
    return result;
};
console.log(accumulatingArray([1, 2, 3, 4]));
console.log(accumulatingArray([1, 5, 7]));
