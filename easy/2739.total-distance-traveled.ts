// https://leetcode.com/problems/total-distance-traveled/solutions/7483421/two-approaches/

function distanceTraveled(main: number, additional: number) {
    let liters = 0;
    while (main > 0) {
        liters += Math.min(5, main);
        main += +(additional-- > 0) - 5;
    }
    return 10 * liters;
}

const distanceTraveledMath = (main: number, additional: number) =>
    10 * (main + Math.min((main - 1) >> 2, additional));
