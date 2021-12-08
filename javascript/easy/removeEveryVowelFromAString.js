// Create a function that takes a string and returns a new string with all vowels removed.
// removeVowels("I have never seen a thin person drinking Diet Coke.")  ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

const removeVowels = (txt) => {
    return txt.replace(/[aeiou]/gi, '');
};
console.log(removeVowels('I have never seen a thin person drinking Diet Coke.'));
