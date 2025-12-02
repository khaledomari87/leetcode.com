// https://leetcode.com/problems/maximum-population-year/solutions/7383123/linear-solution-prefix-sum/

function maximumPopulation(logs: [number, number][], first = 1950, last = 2051) {
    const prefix = new Array<number>(last).fill(0);
    for (const [birth, death] of logs) {
        prefix[birth]++, prefix[death]--;
    }
    let res = 0;
    for (let i = first; i < last; ++i) {
        prefix[i] += prefix[i - 1];
        res = prefix[i] > prefix[res] ? i : res;
    }
    return res;
}
