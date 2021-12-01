// Create a function that takes an encryption key (a string with an even number of characters) and a message to encrypt.
// Group the letters of the key by two:
// "gaderypoluki" -> "ga de ry po lu ki"
// Now take the message for encryption.
// If the message character appears in the key, replace it with an adjacent character in the grouped version of the key.
// If the message character does not appear in the key, leave it as is.
// If the letter in the key occurs more than once, the first result is used.
// Return the encrypted message.
// encrypt("gaderypoluki", "This is an encrypted message") ➞ "Thks ks gn dncyrotde mdssgad"

const encrypt = (key, message) => {
    let result = '';
    for (let i = 0; i < message.length; i = i + 1) {
        let x = 0;
        for (let j = 0; j < key.length; j = j + 1) {
            if (message[i] == key[j]) {
                if (j % 2 == 0) {
                    result = result + key[j + 1];
                } else {
                    result = result + key[j - 1];
                }
                x = 1;
                break;
            }
        }
        if (x == 0) {
            result = result + message[i];
        }
    }
    return result;
};

console.log(encrypt('gaderypoluki', 'This is an encrypted message'));
