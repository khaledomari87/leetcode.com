// https://leetcode.com/problems/trionic-array-i/solutions/7391592/one-pass/

function isTrionic(nums: number[]) {
    if (nums.length < 4 || nums[0] >= nums[1]) return false;
    let flips = 0;
    for (let i = 1, dir = 1, n = nums.length; i < n; i++) {
        if (dir * nums[i - 1] > dir * nums[i]) flips++, dir *= -1;
        if (nums[i - 1] === nums[i] || flips > 2) return false;
    }
    return flips == 2;
}
