// https://leetcode.com/problems/valid-triangle-number/solutions/7225056/linear-scan/

function triangleNumber(nums: number[]) {
    let i = nums.sort((a, b) => a - b).findIndex((v) => v > 0);
    if (i === -1) return 0;
    let res = 0;
    for (const n = nums.length; i < n - 2; i++) {
        for (let k = i + 2, j = i + 1; j < n - 1; j++) {
            while (k < n && nums[i] + nums[j] > nums[k]) k++;
            res += k - j - 1;
        }
    }
    return res;
}
