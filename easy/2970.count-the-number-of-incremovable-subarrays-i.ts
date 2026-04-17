// https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/7962035/brute-force-on3/

function incremovableSubarrayCount(nums: number[]) {
    const n = nums.length;
    const isSorted = (l: number, r: number) => {
        let prev = -1;
        for (let i = 0; i < n; i++) {
            if (i < l || i > r) {
                if (prev > -1 && nums[prev] >= nums[i]) {
                    return false;
                }
                prev = i;
            }
        }
        return true;
    };
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            res += +isSorted(i, j);
        }
    }
    return res;
}
