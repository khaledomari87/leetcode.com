// https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/7481250/simple-on2/

function maximumStrongPairXor(nums: number[]) {
    let res = -Infinity;
    for (let i = 0, n = nums.length, { abs, min, max } = Math; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (abs(nums[i] - nums[j]) <= min(nums[i], nums[j])) {
                res = max(res, nums[i] ^ nums[j]);
            }
        }
    }
    return res;
}
