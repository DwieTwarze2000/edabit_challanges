// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// nextEdge(9, 2) ➞ 1

function nextEdge(side1, side2) {
    return side1 + side2 - 1;
}
