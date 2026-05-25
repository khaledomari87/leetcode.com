// https://leetcode.com/problems/limit-occurrences-in-sorted-array/solutions/8291475/two-pointers-in-place/

function limitOccurrences(nums: number[], k: number) {
    let l = 0;
    for (let r = 0, n = nums.length; r < n; r++) {
        if (l < k || nums[r] !== nums[l - k]) {
            nums[l++] = nums[r];
        }
    }
    return nums.slice(0, l);
}
