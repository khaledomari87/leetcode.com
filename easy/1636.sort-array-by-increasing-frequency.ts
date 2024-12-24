// https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/6182386/simple-two-lines-4ms/

function frequencySort(nums: number[]): number[] {
    const map = nums.reduce((map, cur) => map.set(cur, (map.get(cur) || 0) + 1), new Map<number, number>());
    return nums.sort((a, b) => map.get(a)! - map.get(b)! || b - a);
}
