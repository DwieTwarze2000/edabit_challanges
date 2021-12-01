// You work in a toy car workshop, and your job is to build toy cars from a collection of parts.
// Each toy car needs 4 wheels, 1 car body, and 2 figures of people to be placed inside.
//  Given the total number of wheels, car bodies and figures available, how many complete toy cars can you make?

//  cars(2, 48, 76) ➞ 0
//  cars(43, 15, 87) ➞ 10

const cars = (wheels, bodies, figures) => {
    const arr = [Math.floor(wheels / 4), bodies, Math.floor(figures / 2)];
    return Math.min(...arr);
};
