// https://leetcode.com/problems/minimum-swaps-to-move-zeros-to-end/solutions/8292226/two-pointers/

function minimumSwaps(nums: number[]) {
    let res = 0;
    for (let n = nums.length, l = 0, r = n - 1; l < r; l++, r--) {
        while (l < n && nums[l]) l++;
        while (r >= 0 && !nums[r]) r--;
        res += +(l < r);
    }
    return res;
}
