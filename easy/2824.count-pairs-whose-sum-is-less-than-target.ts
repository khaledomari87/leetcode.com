// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/7685373/constant-space-sort-then-two-pointers/

function countPairs(a: number[], t: number) {
    let res = 0, i = 0, j = a.sort((a, b) => a - b).length - 1;
    while (i < j) a[i] + a[j] < t ? res += j - i++ : j--;
    return res;
}
