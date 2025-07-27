// https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/7009486/linear-solution/

function countHillValley(nums: number[]) {
    let res = 0;
    for (let i = 1, prev = nums[0], n = nums.length - 1; i < n; i++) {
        if (
            prev < nums[i] && nums[i] > nums[i + 1] || // hill
            prev > nums[i] && nums[i] < nums[i + 1] // valley
        ) res++, prev = nums[i];
    }
    return res;
}
