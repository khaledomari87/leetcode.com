// https://leetcode.com/problems/3sum/

function threeSum(nums: number[], target = 0): number[][] {
    const output = new Array<typeof nums>();
    nums.sort((a, b) => a - b);
    let index = 0;
    let value = nums[index];
    const lastIndex = nums.length - 1;
    while (index < lastIndex - 1 && value <= target) {
        const twoTarget = target - value;
        let left = index + 1;
        let right = lastIndex;
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === twoTarget) {
                output.push([value, nums[left], nums[right]]);
                while (nums[--right] === nums[right + 1]);
                while (nums[++left] === nums[left - 1]);
            } else {
                sum < twoTarget ? left++ : right--;
            }
        }
        while (nums[++index] === nums[index - 1]);
        value = nums[index];
    }
    return output;
}
