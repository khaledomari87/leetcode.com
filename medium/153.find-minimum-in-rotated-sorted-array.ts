// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/5921878/shortest-solution/

function findMin(nums: number[]): number {
    let L = 0, R = nums.length - 1;
    while (L < R) {
        const M = Math.floor((L + R) / 2);
        nums[M] < nums[R] ? R = M : L = M + 1;
    }
    return nums[L];
}
