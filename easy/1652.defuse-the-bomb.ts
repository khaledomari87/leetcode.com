// https://leetcode.com/problems/defuse-the-bomb/solutions/6059556/most-optimum-solution-o-n-k/

function decrypt(code: number[], k: number): number[] {
    const n = code.length;
    if (k === 0) return new Array(n).fill(0);

    const output = new Array<number>(n);
    const index = (i: number) => (2 * n + i) % n; // This formula is used to simulate a circular array.
    const direction = k > 0 ? 1 : -1; // 1: sliding window moves to right, -1: sliding window moves to left
    const absK = Math.abs(k);

    // we fill the first element with sum of next k elements
    output[0] = 0;
    for (let i = direction; Math.abs(i) <= absK; i += direction) {
        output[0] += code[index(i)];
    }

    // fill the rest of elements with sum of previous sum + current right - current left
    for (let L = direction, R = k + direction; Math.abs(L) < n; R += direction, L += direction) {
        output[index(L)] = output[index(L - direction)] + code[index(R)] - code[index(L)];
    }

    return output;
}
