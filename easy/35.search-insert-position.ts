// https://leetcode.com/problems/search-insert-position/solutions/5920531/efficient-binary-search/

function searchInsert(nums: number[], target: number): number {
    let L = 0, R = nums.length - 1;
    while (L <= R) {
        const M = Math.floor((L + R) / 2);
        if (nums[M] === target) {
            return M;
        }
        if (nums[M] < target) {
            L = M + 1;
        } else {
            R = M - 1;
        }
    }
    return L; // Or return R + 1
}
