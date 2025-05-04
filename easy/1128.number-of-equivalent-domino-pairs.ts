// https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/6712687/clean-solution/

function numEquivDominoPairs(dominoes: number[][]) {
    const map = new Array(100).fill(0), { min, max } = Math;
    return dominoes.reduce((cnt, dom) =>
        cnt +
        map[10 * max(...dom) + min(...dom)]++, 0);
}
