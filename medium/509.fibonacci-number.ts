// https://leetcode.com/problems/fibonacci-number/solutions/5987682/o-1-time-complexity-using-the-golden-ratio/

function fib(n: number): number {
    const goldenRatio = 1.618034; // (1 + Math.sqrt(5)) / 2
    return Math.trunc((Math.pow(goldenRatio, n) - Math.pow(1 - goldenRatio, n)) / Math.sqrt(5));
    // if (n < 2) return n;
    // let output = 1;
    // for (let prev = 0; n > 1; n--) {
    //     [output, prev] = [prev + output, output];
    // }
    // return output;
}
