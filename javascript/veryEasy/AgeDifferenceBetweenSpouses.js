// Create a function that determines the age difference between spouses in a household.
// The ages ages in years of the parents and their children are given in an array.
// If there is no difference in age between the parents, return "No age difference between spouses.".
//  Otherwise, return the difference in years. Check the examples for more clarification.
// ageDifference([29, 1, 6, 8, 28]) ➞ "1 year"
// ageDifference([43, 86, 49, 86]) ➞ "No age difference between spouses."
// ageDifference([2, 4, 6, 32, 27]) ➞ "5 years"

const ageDifference = (ages) => {
    ages.sort(function (a, b) {
        return b - a;
    });
    const calculateDiff = ages[0] - ages[1];
    if (calculateDiff == 0) {
        return 'No age difference between spouses.';
    } else if (calculateDiff == 1) {
        return `${calculateDiff} year`;
    } else {
        return `${calculateDiff} years`;
    }
};
