// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/6527475/clean-binary-search/

function maximumCount(nums: number[]) {
    let low = nums.length, high = low, l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = l + r >>> 1;
        nums[mid] < 0 ? l = mid + 1 : r = (low = mid) - 1;
    }
    l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = l + r >>> 1;
        nums[mid] > 0 ? r = (high = mid) - 1 : l = mid + 1;
    }
    return Math.max(low, nums.length - high);
}
