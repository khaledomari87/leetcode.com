// https://leetcode.com/problems/find-closest-number-to-zero/solutions/5888027/simple-efficient-and-readable/

function findClosestNumberToZero(nums: number[]): number {
    let closest = nums[0];
    let closestAbs = Math.abs(closest);
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const numAbs = Math.abs(num);
        if (numAbs < closestAbs || (numAbs === closestAbs && num > 0)) {
            closest = num;
            closestAbs = Math.abs(closest);
        }
    }
    return closest;
}
