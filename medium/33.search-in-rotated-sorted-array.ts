// https://leetcode.com/problems/search-in-rotated-sorted-array/

function search(nums: number[], target: number): number {
    let L = 0, R = nums.length - 1;
    while (L <= R) {
        const M = Math.floor((L + R) / 2);
        if (nums[M] === target) {
            return M;
        }
        if (nums[L] <= nums[M]) {
            target < nums[M] && target >= nums[L] ? R = M - 1 : L = M + 1;
        } else {
            target <= nums[M] || target > nums[R] ? R = M - 1 : L = M + 1;
        }
    }
    return -1;
}

function search2(nums: number[], target: number): number {
    const lastIndex = nums.length - 1;
    let L = 0, R = lastIndex;
    while (L < R) {
        const M = Math.floor((L + R) / 2);
        nums[M] < nums[R] ? R = M : L = M + 1;
    } // L & R are equal and point to the minimum value

    target <= nums[lastIndex] ? R = lastIndex : (L = 0, R--);
    while (L <= R) {
        const M = Math.floor((L + R) / 2);
        if (nums[M] === target) {
            return M;
        }
        nums[M] < target ? L = M + 1 : R = M - 1;
    }
    return -1;
}
