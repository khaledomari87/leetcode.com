// https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6014559/linear-solution/

function canSortArray(nums: number[]): boolean {
    let currMin = nums[0];
    let currMax = currMin;
    let curr1s = countOnes(currMin);
    let prevMax = Number.NEGATIVE_INFINITY;
    for (let i = 1; i < nums.length; i++) {
        const count = countOnes(nums[i]);
        if (count === curr1s) {
            currMin = Math.min(currMin, nums[i]);
            currMax = Math.max(currMax, nums[i]);
        } else {
            prevMax = currMax;
            currMin = currMax = nums[i];
            curr1s = count;
        }
        if (nums[i] < prevMax) return false;
    }
    return true;
}

function countOnes(num: number) {
    let count = 0;
    for (const b of num.toString(2)) b === '1' && count++;
    return count;
}
