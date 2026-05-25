// deno-lint-ignore-file prefer-const
// https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/8293031/hash-set/

function numberOfPairs(nums: number[]) {
    let s = new Set<number>(), pairs = 0;
    for (const num of nums) {
        s.has(num) ? (s.delete(num), pairs++) : s.add(num);
    }
    return [pairs, s.size];
}
