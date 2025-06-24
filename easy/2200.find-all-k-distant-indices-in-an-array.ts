// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/6879518/clean/

function findKDistantIndices(nums: number[], key: number, k: number) {
    const n = nums.length, res: number[] = [], { min, max } = Math;
    for (let i = 0, right = 0; i < n; i++) {
        if (nums[i] === key) {
            const left = max(right, i - k);
            right = min(n - 1, i + k) + 1;
            for (let j = left; j < right; j++) res.push(j);
        }
    }
    return res;
}
