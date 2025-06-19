// https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/6859727/sort-greedy/

function partitionArray(nums: number[], k: number) {
    let res = 1, left = nums.sort((a, b) => a - b)[0];
    nums.forEach((curr) => (curr - left > k) && (res++, left = curr));
    return res;
}
