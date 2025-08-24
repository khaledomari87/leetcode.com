// https://leetcode.com/problems/minimum-common-value/solutions/7116123/two-pointers/

function getCommon(a: number[], b: number[]) {
    for (let i = 0, j = 0, m = a.length, n = b.length; i < m && j < n;) {
        if (a[i] === b[j]) return a[i];
        a[i] > b[j] ? j++ : i++;
    }
    return -1;
}
