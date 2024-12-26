// https://leetcode.com/problems/minimum-number-game/solutions/6190609/sort-then-swapping-by-khaled-alomari-144f/

function numberGame(nums: number[]): number[] {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
    return nums;
}
