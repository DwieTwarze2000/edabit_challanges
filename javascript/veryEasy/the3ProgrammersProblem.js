// You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers
// (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.
// programmers(147, 33, 526) ➞ 493
// programmers(33, 72, 74) ➞ 41
// programmers(1, 5, 9) ➞ 8

const programmers = (one, two, three) => {
    return Math.max(one, two, three) - Math.min(one, two, three);
};
