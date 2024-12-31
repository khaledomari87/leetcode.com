// https://leetcode.com/problems/split-the-array/solutions/6210138/optimum-solution/

function isPossibleToSplit(nums: number[]) {
    const counter = new Map<typeof nums[number], number>();
    for (const num of nums) {
        const count = counter.get(num) || 0;
        if (count > 1) return false;
        counter.set(num, count + 1);
    }
    return true;
}
