// https://leetcode.com/problems/smallest-pair-with-different-frequencies/solutions/7623099/counter-sort-nested-double-loop/

function minDistinctFreqPair(nums: number[]) {
    const mp = nums.reduce(
        (m, n) => m.set(n, (m.get(n) || 0) + 1),
        new Map<number, number>(),
    );
    const keys = [...mp.keys()].sort((a, b) => a - b);
    for (let i = 0, k = keys.length; i < k; i++) {
        for (let j = i + 1; j < k; j++) {
            if (mp.get(keys[i])! !== mp.get(keys[j])!) {
                return [keys[i], keys[j]];
            }
        }
    }
    return [-1, -1];
}
