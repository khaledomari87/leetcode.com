// https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/7235795/simplest/

function triangularSum(nums: number[]) {
    while (nums.length > 1) {
        nums = Array.from(
            { length: nums.length - 1 },
            (_, i) => (nums[i] + nums[i + 1]) % 10,
        );
    }
    return nums[0];
}
