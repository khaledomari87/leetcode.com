// https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/6554143/optimal-solution-simulation/

function minOperations(nums: (0 | 1)[]) {
    let res = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 0) {
            ++res;
            nums[i] = 1, nums[i + 1] ^= 1, nums[i + 2] ^= 1;
        }
    }
    return [1, 2].some((i) => nums.at(-i) !== 1) ? -1 : res;
}
