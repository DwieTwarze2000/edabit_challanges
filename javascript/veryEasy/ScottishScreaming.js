// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e".
// Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.
// toScottishScreaming("hello world") ➞ "HELLE WERLD"
function toScottishScreaming(str) {
    return str.toUpperCase().replace(/[AIOU]/g, 'E');
}
