// Create a function that returns which chapter is nearest to the page you're on.
// If two chapters are equidistant, return the chapter with the higher page number.
// All page numbers in the dictionary will be valid integers.
// Return the higher page number if ever two pages are equidistant.
// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"
// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) ➞ "The End?"

const nearestChapter = (chapters, num) => {
    let nearestChapter = 0;
    let result = '';
    for (key in chapters) {
        if (
            Math.abs(num - chapters[key]) < nearestChapter ||
            nearestChapter == 0 ||
            Math.abs(num - chapters[key]) == nearestChapter
        ) {
            result = key;
            nearestChapter = Math.abs(num - chapters[key]);
        }
    }
    return result;
};
