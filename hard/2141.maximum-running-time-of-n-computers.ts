// https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/7384969/sorting/

function maxRunTime(n: number, b: number[]) {
    let sum = b.sort((a, b) => a - b).reduce((a, b) => a + b);
    while (b.at(-1)! > sum / n) n--, sum -= b.pop()!;
    return Math.floor(sum / n);
}
