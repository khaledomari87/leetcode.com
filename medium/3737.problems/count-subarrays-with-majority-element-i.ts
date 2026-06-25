// https://leetcode.com/problems/count-subarrays-with-majority-element-i/solutions/8358334/brute-force/

function countMajoritySubarrays(nums: number[], target: number) {
    let res = 0;
    for (let l = 0, n = nums.length; l < n; l++) {
        for (let r = l, cnt = 0; r < n; r++) {
            if (nums[r] === target) cnt++;
            if (cnt > (r - l + 1) / 2) res++;
        }
    }
    return res;
}
