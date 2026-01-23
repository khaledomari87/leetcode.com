// https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/7515906/two-solutions-on3-on2/

function sumCounts(nums: number[]) {
    let res = 0;
    for (let n = nums.length, i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            res += new Set(nums.slice(i, j + 1)).size ** 2;
        }
    }
    return res;
}

function sumCounts2(nums: number[]) {
    let res = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        const seen = new Set<number>();
        for (let j = i; j < n; j++) {
            res += seen.add(nums[j]).size ** 2;
        }
    }
    return res;
}
