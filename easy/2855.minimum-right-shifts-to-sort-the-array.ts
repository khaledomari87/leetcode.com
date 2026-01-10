// https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/7483739/constant-space/

// deno-fmt-ignore
function minimumRightShifts(nums: number[]) {
    const first = nums.findIndex((v, i) => i && nums[i - 1] > v);
    if (first === -1) return 0;
    if (nums[nums.length - 1] > nums[0] || first !== nums
        .findLastIndex((v, i) => i && nums[i - 1] > v)) return -1;
    return nums.length - first;
}
