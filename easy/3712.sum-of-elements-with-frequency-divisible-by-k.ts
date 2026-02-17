// https://leetcode.com/problems/sum-of-elements-with-frequency-divisible-by-k/solutions/7584765/clean/

// deno-fmt-ignore
function sumDivisibleByK(nums: number[], k: number) {
    const freqs: number[] = nums.reduce((arr, num) =>
        (arr[num]++, arr), new Array(101).fill(0));
    return freqs.reduce((r, f, n) => r + n * f * +!(f % k), 0);
}
