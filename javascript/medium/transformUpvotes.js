// Create a function that transforms a string of upvote counts into an array of numbers.
// Each k represents a thousand.
// transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]
// transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]

const transformUpvotes = (s) => {
    s = s.split(' ');
    result = [];
    for (i = 0; i < s.length; i++) {
        if (s[i].includes('k')) {
            result.push(parseFloat(s[i].slice(0, s[i].length - 1)) * 1000);
        } else {
            result.push(parseFloat(s[i]));
        }
    }
    return result;
};

// console.log(transformUpvotes('6.8k 13.5k'));
console.log(transformUpvotes('20.3k 3.8k 7.7k 992'));
