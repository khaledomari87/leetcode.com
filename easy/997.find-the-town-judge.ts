// https://leetcode.com/problems/find-the-town-judge/solutions/6779281/clean-solution/

function findJudge(n: number, trust: number[][]) {
    const counts = trust.reduce(
        (m, t) => (m[t[1]]++, m[t[0]]--, m),
        new Array<number>(n + 1).fill(0),
    );
    for (let i = 1, target = n - 1; i <= n; i++) {
        if (counts[i] === target) return i;
    }
    return -1;
}
