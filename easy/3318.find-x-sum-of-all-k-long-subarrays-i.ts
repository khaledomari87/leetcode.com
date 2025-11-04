// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/7325522/hash-map-sorting/

function findXSum(nums: number[], k: number, x: number) {
    const counts: Map<number, number> = nums
        .slice(0, k - 1)
        .reduce((map, num) => map.set(num, (map.get(num) || 0) + 1), new Map());
    const n = nums.length, res: number[] = new Array(n - k + 1);
    for (let right = k - 1; right < n; right++) {
        counts.set(nums[right], (counts.get(nums[right]) || 0) + 1);
        const left = right - k + 1;
        res[left] = [...counts]
            .sort((a, b) => b[1] - a[1] || b[0] - a[0])
            .slice(0, x)
            .reduce(
                (s, item) => s + item[0] * item[1],
                0,
            );
        const first = counts.get(nums[left])!;
        if (!first) counts.delete(nums[left]);
        else counts.set(nums[left], first - 1);
    }
    return res;
}
