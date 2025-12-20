// https://leetcode.com/problems/find-the-distinct-difference-array/solutions/7426738/linear-solution-prefix-suffix/

// deno-fmt-ignore
function distinctDifferenceArray(nums: number[]) {
    const pre = new Map<number, number>();
    const suf: typeof pre = nums.reduce((map, num) =>
        map.set(num, (map.get(num) || 0) + 1), new Map());
    const res: number[] = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        pre.set(nums[i], (pre.get(nums[i]) || 0) + 1);
        const sufItem = suf.get(nums[i])!;
        if (sufItem === 1) suf.delete(nums[i]);
        else suf.set(nums[i], sufItem - 1);
        res[i] = pre.size - suf.size;
    }
    return res;
}
