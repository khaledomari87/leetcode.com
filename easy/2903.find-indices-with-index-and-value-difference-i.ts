// https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/7448732/two-approaches-brute-force-linear/

function findIndices(nums: number[], indexDiff: number, valueDiff: number) {
    let mn = 0, mx = 0;
    for (let i = indexDiff, n = nums.length; i < n; i++) {
        if (nums[i - indexDiff] < nums[mn]) mn = i - indexDiff;
        if (nums[i - indexDiff] > nums[mx]) mx = i - indexDiff;
        if (nums[i] - nums[mn] >= valueDiff) return [mn, i];
        if (nums[mx] - nums[i] >= valueDiff) return [mx, i];
    }
    return [-1, -1];
}

function findIndicesBF(nums: number[], indexDiff: number, valueDiff: number) {
    const n = nums.length, abs = Math.abs;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (abs(i - j) >= indexDiff && abs(nums[i] - nums[j]) >= valueDiff) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
