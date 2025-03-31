// https://leetcode.com/problems/put-marbles-in-bags/solutions/6598266/sort-and-greedy/

function putMarbles(weights: number[], k: number) {
    const paris = new Array<number>(weights.length - 1);
    for (let i = 0; i < weights.length - 1; i++) {
        paris[i] = weights[i] + weights[i + 1];
    }
    paris.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < k - 1; i++) {
        res += paris.at(-i - 1)! - paris[i];
    }
    return res;
}
