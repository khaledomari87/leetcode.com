// https://leetcode.com/problems/largest-integer-with-given-digit-sum/solutions/8448886/greedy-iterative/

function largestInteger(n: number, s: number) {
    let res = 0;
    for (const min = Math.min; s; s -= min(s, 9)) {
        if (!n--) return -1;
        res = res * 10 + min(s, 9);
    }
    return res * 10 ** n;
}
