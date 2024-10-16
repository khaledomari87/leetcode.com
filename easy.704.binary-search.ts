// https://leetcode.com/problems/binary-search/

function search(nums: number[], target: number): number {
    let L = 0, R = nums.length -1;
    while (L <= R) {
        const M = Math.floor((L + R )/ 2);
        if (nums[M] === target) {
            return M;
        } else if (nums[M] < target) {
            L = M + 1;
        } else {
            R = M - 1;
        }
    }
    return -1;
};
