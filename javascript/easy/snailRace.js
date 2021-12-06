// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one.
// Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is
// Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// Round 2: [m, s] Use his middle snail against Steve's slowest.
// Round 3: [f, m] Use his fastest snail against Steve's middle.
// Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.
// The function inputs:
// Array 1: [s, m, f] for Maurice.
// Array 2: [s, m, f] for Steve
// mauriceWins([3, 5, 10], [4, 7, 11]) ➞ true
// mauriceWins([6, 8, 9], [7, 12, 14]) ➞ false
// mauriceWins([1, 8, 20], [2, 9, 100]) ➞ true

const mauriceWins = ([ms, mm, mf], [ss, sm, sf]) => {
    let score = 0;
    if (ms > sf) {
        score += 1;
    }
    if (mm > ss) {
        score += 1;
    }
    if (mf > sm) {
        score += 1;
    }
    return score > 1;
};
console.log(mauriceWins([3, 5, 10], [4, 7, 11]));
