// https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let output = 0;
    for (const item of set.values()) {
        if (!set.has(item - 1)) { // This is the trick, without it => O(n^2)
            let count = 1;
            let nextItem = item;
            while (set.has(++nextItem)) {
                count++;
            }
            output = Math.max(output, count);
        }
    }
    return output;
}
