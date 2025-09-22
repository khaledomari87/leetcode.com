// https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/7212887/3-lines/

function maxFrequencyElements(nums: number[]) {
    const freq = nums.reduce((a, n) => (a[n]++, a), new Array<number>(101).fill(0));
    const max = nums.reduce((a, n) => Math.max(a, freq[n]), -Infinity);
    return nums.reduce((res, n) => res + +(freq[n] === max), 0);
}
