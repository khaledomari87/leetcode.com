// https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/6666283/clean-two-pointers/?envType=daily-question&envId=2025-04-19

function countFairPairs(nums: number[], lower: number, upper: number) {
    const bound = (target: number, low: number, flag: boolean) => {
        let high = nums.length;
        while (low < high) {
            const mid = low + high >>> 1;
            if (nums[mid] < target || flag && nums[mid] === target) low = mid + 1;
            else high = mid;
        }
        return low;
    };
    return nums.sort((a, b) => a - b).reduce(
        (res, num, i) =>
            res + bound(upper - num, i + 1, true) -
            bound(lower - num, i + 1, false),
        0,
    );
}
