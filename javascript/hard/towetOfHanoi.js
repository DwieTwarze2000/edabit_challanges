// There are three towers.
// The objective of the game is to move all the disks over to tower #3,
//  but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi,
//  check the Resources tab.
// towerHanoi(3) ➞ 7
// towerHanoi(5) ➞ 31
// towerHanoi(0) ➞ 0

const towerHanoi = (discs) => {
    return Math.pow(2, discs) - 1;
};

console.log(towerHanoi(5));
