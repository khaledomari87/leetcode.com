// https://leetcode.com/problems/last-visited-integers/solutions/7417496/linear-solution-without-array-unshifting/

function lastVisitedIntegers(nums: number[]) {
    const ans: number[] = [], seen: number[] = [];
    for (let i = 0, k = 0, n = nums.length; i < n; i++) {
        if (nums[i] === -1) {
            ans.push(++k > seen.length ? -1 : seen[k - 1]);
        } else {
            seen.unshift(nums[i]); // O(n)
            k = 0;
        }
    }
    return ans;
}

function lastVisitedIntegersOptimized(nums: number[]) {
    const ans: number[] = [], seen: number[] = [];
    for (let i = 0, k = 0, n = nums.length; i < n; i++) {
        if (nums[i] === -1) {
            ans.push(++k > seen.length ? -1 : seen.at(-k)!);
        } else {
            seen.push(nums[i]); // O(1)
            k = 0;
        }
    }
    return ans;
}
