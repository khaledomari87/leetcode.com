// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/6889368/simple-simulation/

function numberOfSteps(num: number) {
    let res = 0;
    while (num % 2 ? num-- : num /= 2) res++;
    return res;
}
