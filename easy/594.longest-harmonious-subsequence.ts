// https://leetcode.com/problems/longest-harmonious-subsequence/solutions/6350015/sort-sliding-window-hash-map-approaches/

function findLHSTwoPionters(nums: number[]) {
    const n = nums.sort((a, b) => a - b).length, max = Math.max;
    let res = 0;
    for (let l = 0, r = 1; r < n; r++) {
        if (nums[r] - nums[l] > 1) r = ++l;
        else if (nums[r] - nums[l] === 1) res = max(res, r - l + 1);
    }
    return res;
}

function findLHSHashMap(nums: number[]) {
    const map = nums.reduce(
        (m, n) => m.set(n, (m.get(n) || 0) + 1),
        new Map<number, number>(),
    );
    let res = 0;
    map.forEach((c, n) => res = Math.max(res, c + (map.get(n + 1) || -Infinity)));
    return res;
}

function findLHS(nums: number[]) {
    // return findLHSTwoPionters(nums);
    return findLHSHashMap(nums);
}
