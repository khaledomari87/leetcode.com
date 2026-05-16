// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/8238444/binary-search/

function findMin(nums: number[]) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const m = (l + r) >> 1;
        nums[m] < nums[r] ? r = m : l = m + 1;
    }
    return nums[r];
}
