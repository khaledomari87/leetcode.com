// https://leetcode.com/problems/assign-cookies/solutions/6293963/sorting-both-arrays/

function findContentChildren(g: number[], s: number[]) {
    [g, s].forEach((a) => a.sort((a, b) => a - b));
    let res = 0;
    for (let j = 0; res < g.length && j < s.length; j++) {
        g[res] <= s[j] && ++res;
    }
    return res;
}
