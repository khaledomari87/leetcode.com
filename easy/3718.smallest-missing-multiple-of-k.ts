// https://leetcode.com/problems/smallest-missing-multiple-of-k/solutions/7328523/clean-solution/

function missingMultiple(nums: number[], k: number) {
    let res = k;
    for (const set = new Set(nums); set.has(res); res += k);
    return res;
}
