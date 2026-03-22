// https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/7679056/two-lines/

function findIntersectionValues(a: number[], b: number[]) {
    const g = [a, b], s = g.toReversed().map((v) => new Set(v));
    return g.map((v, i) => v.reduce((r, n) => r + +s[i].has(n), 0));
}
