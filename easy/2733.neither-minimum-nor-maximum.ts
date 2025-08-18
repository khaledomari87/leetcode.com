// https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/7096438/clean/

function findNonMinOrMax(nums: number[]) {
    const set = new Set<number>();
    for (const num of nums) {
        if (set.add(num).size === 3) {
            return [...set].sort((a, b) => a - b)[1];
        }
    }
    return -1;
}
