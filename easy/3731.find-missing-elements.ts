// https://leetcode.com/problems/find-missing-elements/solutions/7418453/sorting/

function findMissingElements(nums: number[]) {
    const res: number[] = [];
    const n = nums.sort((a, b) => a - b).length;
    for (let i = 1; i < n; i++) {
        res.push(...Array.from(
            { length: nums[i] - nums[i - 1] - 1 },
            (_, j) => nums[i - 1] + j + 1,
        ));
    }
    return res;
}
