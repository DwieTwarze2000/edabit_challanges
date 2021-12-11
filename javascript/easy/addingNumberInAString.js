// Given a string of numbers separated by a comma and space, return the total sum of all the numbers.
// addNums("2, 5, 1, 8, 4") ➞ 20
// addNums("1, 2, 3, 4, 5, 6, 7") ➞ 28

const addNums = (str) => {
    sum = 0;
    str.split(', ').map((el) => {
        sum += parseInt(el);
    });
    return sum;
};
console.log(addNums('2, 5, 1, 8, 4'));
