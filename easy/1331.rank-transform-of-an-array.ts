// https://leetcode.com/problems/rank-transform-of-an-array/solutions/6851699/clean-and-elegant/

function arrayRankTransform(arr: number[]) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    const rank = new Map(sorted.map((v, i) => [v, i + 1]));
    return arr.map((v) => rank.get(v));
}
