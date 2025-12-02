// https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/7387779/math/

const min = Math.min;
function kItemsWithMaximumSum(numOnes: number, numZeros: number, numNegOnes: number, k: number) {
    const ones = min(numOnes, k);
    const zeros = min(numZeros, k -= ones);
    return ones - min(numNegOnes, k - zeros);
}
