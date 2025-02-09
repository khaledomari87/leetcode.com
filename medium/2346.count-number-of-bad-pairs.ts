// https://leetcode.com/problems/count-number-of-bad-pairs/solutions/6397049/optimal-solution-hash-map/

function countBadPairs(nums: number[]): number {
    const map = new Map<number, number>();
    return nums.reduce((res, num, idx) => {
        const diff = idx - num;
        const item = map.get(diff) || 0;
        map.set(diff, item + 1);
        return res + idx - item;
    }, 0);
}
