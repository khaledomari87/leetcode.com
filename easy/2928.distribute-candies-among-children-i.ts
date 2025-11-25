// https://leetcode.com/problems/distribute-candies-among-children-i/solutions/7373708/dumb-brute-force/

function distributeCandies(n: number, limit: number) {
    let res = 0;
    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            for (let k = 0; k <= limit; k++) {
                res += +(i + j + k === n);
            }
        }
    }
    return res;
}
