// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/6847700/greedy-2-lines/

function getNoZeroIntegers(n: number, m = 0) {
    while ([++m, --n].some((v) => `${v}`.includes('0')));
    return [m, n];
}
