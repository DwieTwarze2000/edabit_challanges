// Write a regular expression that matches numbers whose digits are not repeated (i.e. digits are distinct).
// regularExpression.test("123") ➞ true
// regularExpression.test("112233") ➞ false

const regularExpression = /^(?!.*(.).*\1)\d{0,10}$/;
