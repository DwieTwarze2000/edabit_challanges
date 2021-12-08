// Create a function that takes a string txt and a number n and returns the repeated string n number of times.
// If given argument txt is not a string, return Not A String !!
// repeatString("Mubashir", 2) ➞ "MubashirMubashir"
// repeatString("Matt", 3) ➞ "MattMattMatt"

const repeatString = (txt, num) => {
    if (typeof txt == 'string') return txt.repeat(num);
    return 'Not A String !!';
};
console.log(repeatString(214, 2));
