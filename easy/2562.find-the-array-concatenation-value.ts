// https://leetcode.com/problems/find-the-array-concatenation-value/solutions/7387035/strings-simulation/

function findTheArrayConcVal(nums: number[]) {
    let res = nums.length % 2 ? nums[(nums.length - 1) / 2] : 0;
    for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
        res += +`${nums[l]}${nums[r]}`;
    }
    return res;
}
