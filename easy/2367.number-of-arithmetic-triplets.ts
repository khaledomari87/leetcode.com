// https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/7443301/two-approaches-explained/

function arithmeticTriplets(nums: number[], diff: number) {
    const s = new Set(nums);
    return nums.reduce((r, n) => r + +(s.has(n + diff) && s.has(n - diff)), 0);
}

function arithmeticTriplets2(nums: number[], diff: number) {
    let res = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        for (let j = i + 1, n = nums.length; j < n; j++) {
            for (let k = j + 1, n = nums.length; k < n; k++) {
                res += +(nums[j] - nums[i] == diff &&
                    nums[k] - nums[j] == diff);
            }
        }
    }
    return res;
}
