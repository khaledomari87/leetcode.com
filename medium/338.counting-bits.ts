// https://leetcode.com/problems/counting-bits/solutions/6275264/linear-solution/

function countBits(n: number): number[] {
    const res = new Array<number>(n);
    res[0] = 0;
    for (let i = 1; i <= n; i++) {
        res[i] = res[Math.floor(i / 2)] + +(i % 2 === 1);
    }
    return res;
}
