// https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6020640/fastest-solution-less-than-20ms/

function largestCombination(cands: number[]): number {
    const maxBits = cands.reduce((prev, curr) => Math.max(prev, curr)).toString(2).length;
    let output = 0;
    for (let i = 0; i < maxBits; i++) {
        let count = 0;
        for (let c = 0; c < cands.length; c++) {
            count += cands[c] % 2; // gets the most right bit
            cands[c] = cands[c] >> 1;
        }
        output = Math.max(output, count);
    }
    return output;
}
