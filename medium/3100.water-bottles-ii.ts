// https://leetcode.com/problems/water-bottles-ii/solutions/7242080/simulation-math/

function maxBottlesDrunk(bottles: number, rate: number) {
    let empty = bottles;
    while (empty >= rate) {
        empty += 1 - rate; // 1 new empty is added
        bottles++, rate++;
    }
    return bottles;
}

function maxBottlesDrunkMath(bottles: number, rate: number) {
    const b = 2 * rate - 3, { ceil, sqrt } = Math;
    return bottles - 1 + ceil((sqrt(b * b + 8 * bottles) - b) / 2);
}
