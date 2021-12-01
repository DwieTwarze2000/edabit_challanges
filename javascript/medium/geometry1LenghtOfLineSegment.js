// Write a function that takes coordinates of two points on a two-dimensional plane and returns
// the length of the line segment connecting those two points.
// lineLength([15, 7], [22, 11]) ➞ 8.06
// lineLength([0, 0], [0, 0]) ➞ 0
// lineLength([0, 0], [1, 1]) ➞ 1.41
// The order of the given numbers is X, Y.
// Round your result to two decimal places.

const lineLength = ([x1, y1], [x2, y2]) => {
    return Math.round(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) * 100) / 100;
};

console.log(lineLength([0, 0], [1, 1]));
