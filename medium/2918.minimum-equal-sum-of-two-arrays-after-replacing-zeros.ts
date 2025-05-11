// https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/6729875/optimal-solution/

function minSum(nums1: number[], nums2: number[]) {
    let z1 = 0, z2 = 0;
    const sum1 = nums1.reduce((s, n) => (z1 += +(n === 0), s + n), 0) + z1;
    const sum2 = nums2.reduce((s, n) => (z2 += +(n === 0), s + n), 0) + z2;
    return !z1 && sum2 > sum1 || !z2 && sum1 > sum2 ? -1 : Math.max(sum1, sum2);
}
