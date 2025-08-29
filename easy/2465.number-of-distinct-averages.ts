// https://leetcode.com/problems/number-of-distinct-averages/solutions/7134387/sort-set/

function distinctAverages(nums: number[]) {
    const set = new Set<number>();
    const mid = nums.sort((a, b) => a - b).length / 2;
    for (let i = 0; i < mid; i++) {
        set.add((nums[i] + nums.at(-1 - i)!) / 2);
    }
    return set.size;
}
