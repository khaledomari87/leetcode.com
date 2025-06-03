// https://leetcode.com/problems/distribute-candies-to-people/solutions/6808615/simulation/

function distributeCandies(candies: number, n: number) {
    const res: number[] = new Array(n).fill(0);
    for (let i = 0; candies > 0; candies -= i) {
        res[i % n] += Math.min(candies, ++i);
    }
    return res;
}
