// https://leetcode.com/problems/longest-harmonious-subsequence/solutions/6350015/two-approaches-two-pointers-hash-map/

function findLHSTwoPionters(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let res = 0;
    for (let l = 0, r = 1; r < nums.length; r++) {
        if (nums[r] - nums[l] > 1) r = ++l;
        else if (nums[r] - nums[l] === 1) res = Math.max(res, r - l + 1);
    }
    return res;
}

function findLHSHashMap(nums: number[]): number {
    const map = new Map<number, number>();
    nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));
    let res = 0;
    map.forEach((count, num) => res = Math.max(res, count + (map.get(num + 1) || Number.NEGATIVE_INFINITY)));
    return res;
}

function findLHS(nums: number[]): number {
    // return findLHSTwoPionters(nums);
    return findLHSHashMap(nums);
}
