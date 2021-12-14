// Create a function that can turn JPY (Japanese yen) to USD (American dollar).
// yenToUsd(1) ➞ 0.01
// yenToUsd(500) ➞ 4.65
function yenToUsd(yen) {
    return parseFloat((yen / 107.5).toFixed(2));
}
