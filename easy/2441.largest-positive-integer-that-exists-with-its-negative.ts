// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/7109364/linear-solution/

function findMaxK(nums: number[]) {
    const seen = new Set<number>(), { max, abs } = Math;
    return nums.reduce((res, n) => {
        seen.has(-n) ? res = max(res, abs(n)) : seen.add(n);
        return res;
    }, -1);
}
