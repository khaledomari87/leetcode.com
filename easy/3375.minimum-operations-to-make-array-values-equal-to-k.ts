// https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6182656/simple-efficient-and-readable/

function minOperations(nums: number[], k: number): number {
    const set = new Set<number>();
    for (const n of nums) {
        if (n < k) return -1;
        set.add(n);
    }
    return set.size - +set.has(k);
}
