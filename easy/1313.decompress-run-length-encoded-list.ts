// https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/6844034/clean-ts-js/

function decompressRLElist(nums: number[]) {
    const res: number[] = [];
    for (let i = 0; i < nums.length; i += 2) {
        res.push(...new Array(nums[i]).fill(nums[i + 1]));
    }
    return res;
}
