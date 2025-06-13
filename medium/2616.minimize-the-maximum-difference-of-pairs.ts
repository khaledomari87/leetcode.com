// https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/6838158/binary-search/

function minimizeMax(nums: number[], p: number) {
    const n = nums.sort((a, b) => a - b).length;
    let left = 0, right = nums[n - 1] - nums[0];
    while (left < right) {
        const mid = (left + right) >>> 1;
        let cnt = 0, idx = 1;
        while (idx < n) {
            if (nums[idx] - nums[idx - 1] <= mid) cnt++, idx++;
            idx++;
        }
        cnt >= p ? right = mid : left = mid + 1;
    }
    return left;
}
