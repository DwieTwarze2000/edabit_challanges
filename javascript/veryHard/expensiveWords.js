// Each letter in a sentence is worth its position in the alphabet (i.e. a = 1, b = 2, c = 3, etc...).
// However, if a word is all in UPPERCASE, the value of that word is doubled.
// Create a function which returns the value of a sentence.
// getSentenceValue("abc ABC Abc") ➞ 24
// a = 1, b = 2, c = 3
// abc = 1 + 2 + 3 = 6
// ABC = (1+2+3) * 2 = 12 (ALL letters are in uppercase)
// Abc = 1 + 2 + 3 = 6 (NOT ALL letters are in uppercase)
// 6 + 12 + 6 = 24
// getSentenceValue("HELLO world") ➞ 176

const getSentenceValue = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let points = 0;
    words = str.split(' ');
    for (wordNum in words) {
        letters = [...words[wordNum]];
        let wordPoints = 0;
        Array.prototype.forEach.call(letters, (letter) => {
            wordPoints += alphabet.indexOf(letter.toLowerCase()) + 1;
        });
        if (words[wordNum] == words[wordNum].toUpperCase()) {
            wordPoints *= 2;
        }
        points += wordPoints;
    }

    return points;
};

console.log(getSentenceValue('HELLO world'));
