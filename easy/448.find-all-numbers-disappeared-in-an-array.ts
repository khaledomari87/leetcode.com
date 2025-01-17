// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/6293300/constant-extra-space-with-intuition/

function findDisappearedNumbers(nums: number[]) {
    for (let i = 0, abs = Math.abs(nums[i]) - 1; i < nums.length; abs = Math.abs(nums[++i]) - 1) {
        nums[abs] = -Math.abs(nums[abs]);
    }
    return nums.reduce((res, v, i) => v > 0 && res.push(i + 1) && res || res, new Array<number>());
}
