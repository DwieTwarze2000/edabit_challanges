// You are given two values a and b of identical type: numbers, strings or arrays. The result will be:
// The sum of a and b if the parameters are numbers.
// a = 1 | b = 1 ➞ Result = 2
// The join in a single string of a and b if the parameters are strings.
// a = "1" | b = "1" ➞ Result = "11"
// The concatenation of the values of a and b in a single array if the parameters are arrays.
// a = ["String"] | b = ["String"] ➞ Result = ["String", "String"]
// In any case, you don't have to simply return the result.
// This challenge will be a little different from usual because your function is going to return the same Test Case that verifies
// the correctness of your function!
// When you try to solve a challenge your function is passed to a Test function, that accepts three parameters:
// your function with its related parameters, the expected result, and an optional comment (not used in this exercise).
// There are two different types for a Test function:
// Test.assertEquals(yourFunctionName(firstParameter, ..., lastParameter), result)
// This is used when the value type of the expected result is primitive
// (numbers, strings, booleans or special values like undefined, null and NaN).
// Test.assertSimilar(yourFunctionName(firstParameter, ..., lastParameter), result)
// This is used when the value type of the expected result is an object (arrays or object literals).
// You must return a string containing the Test function that verifies the correctness of the result that you got.
// See the examples below for a better explanation.
// createTest(1, 1) ➞ 'Test.assertEquals(createTest(1, 1), 2)'
// createTest("a", "b") ➞ 'Test.assertEquals(createTest("a", "b"), "ab")
// createTest(["String"], ["String"]) ➞ 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])'

const createTest = (a, b) => {
    let result;
    if (Array.isArray(a)) {
        result = a.concat(b);
        if (typeof result[0] == 'string') {
            result[0] = '"' + result[0] + '"';
            result[1] = '"' + result[1] + '"';
            a = '"' + a + '"';
            b = '"' + b + '"';
        }
    } else {
        result = a + b;
        if (typeof result == 'string') {
            a = '"' + a + '"';
            b = '"' + b + '"';
            result = '"' + result + '"';
        }
    }
    if (Array.isArray(result)) {
        str = 'Test.assertSimilar(createTest([' + a + '], [' + b + ']), [' + result.join(', ') + '])';
    } else {
        str = 'Test.assertEquals(createTest(' + a + ', ' + b + '), ' + result + ')';
    }
    return str;
};
