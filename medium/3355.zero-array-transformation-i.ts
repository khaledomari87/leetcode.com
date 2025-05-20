// https://leetcode.com/problems/zero-array-transformation-i/solutions/6761860/difference-array/

function isZeroArray(nums: number[], queries: [number, number][]) {
    const delta: number[] = new Array(nums.length + 1).fill(0);
    queries.forEach((q) => (delta[q[0]]++, delta[q[1] + 1]--));
    const counts: number[] = [];
    for (let i = 0, curr = 0; i < delta.length; i++) {
        counts.push(curr += delta[i]);
    }
    return nums.every((num, i) => counts[i] >= num);
}
