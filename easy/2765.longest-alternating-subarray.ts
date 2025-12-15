// https://leetcode.com/problems/longest-alternating-subarray/solutions/7415734/constant-space-one-pass/

function alternatingSubarray(nums: number[]) {
    const n = nums.length, max = Math.max;
    let res = -1;
    for (let i = 1, cnt = 1, flag = 1; i < n; i++) {
        const diff = nums[i] - nums[i - 1];
        if (diff === flag) {
            res = Math.max(res, ++cnt);
            flag *= -1;
        } else {
            cnt = 1 + +(diff === 1);
            flag = diff === 1 ? -1 : 1;
        }
    }
    return res;
}
