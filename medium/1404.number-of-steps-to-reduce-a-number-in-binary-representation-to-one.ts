// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/7610498/simple-simulation/

function numSteps(s: string) {
    let r = 0;
    for (let n = BigInt(`0b${s}`); n > 1; r++) {
        n % 2n ? n++ : n /= 2n;
    }
    return r;
}
