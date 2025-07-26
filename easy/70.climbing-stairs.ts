// https://leetcode.com/problems/climbing-stairs/solutions/5987892/only-3-lines-most-efficient-solution/
// https://leetcode.com/problems/climbing-stairs/solutions/5987912/constant-time-o-1-using-the-golden-ratio/

function climbStairs(n: number): number {
    let output = 1;
    for (let prev = 1; n > 1; n--) [output, prev] = [prev + output, output];
    return output;
}

function climbStairs2(n: number): number {
    if (n < 4) return n;
    const goldenRatio = 1.61803398875; // (1 + Math.sqrt(5)) / 2;
    return Math.round(goldenRatio * (Math.pow(goldenRatio, n) - Math.pow(1 - goldenRatio, n)) / Math.sqrt(5));
}
