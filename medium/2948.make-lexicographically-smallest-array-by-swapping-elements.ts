// https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/6326930/grouping-by-the-limit/

function lexicographicallySmallestArray(nums: number[], limit: number) {
    const sorted = [...nums].sort((a, b) => a - b), groups: number[][] = [];
    const map = new Map<number, number>();
    for (const num of sorted) {
        if (!groups.length || Math.abs(num - groups.at(-1)!.at(-1)!) > limit) {
            groups.push([]);
        }
        groups.at(-1)!.push(num);
        map.set(num, groups.length - 1);
    }
    // Very important to avoid groups[number].shift()
    const res: typeof nums = [], pointers = new Array<number>(groups.length).fill(0);
    for (const num of nums) {
        const groupIndex = map.get(num)!;
        res.push(groups[groupIndex][pointers[groupIndex]++]);
    }
    return res;
}
