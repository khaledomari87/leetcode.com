// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/6855637/greedy-sorting/

function divideArray(nums: number[], k: number) {
    const res: number[][] = [], size = 3, offset = size - 1;
    const n = nums.sort((a, b) => a - b).length - offset;
    for (let i = 0; i < n; i += size) {
        if (nums[i + offset] - nums[i] > k) return [];
        res.push(nums.slice(i, i + size));
    }
    return res;
}
