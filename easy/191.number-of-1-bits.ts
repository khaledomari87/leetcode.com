// https://leetcode.com/problems/number-of-1-bits/solutions/6226444/two-solutions/

function hammingWeight(n: number): number {
    let count = 0;
    while (n !== 0) {
        count += n % 2;
        n >>>= 1; // shift to the right
    }
    return count;
}

const hammingWeight2 = (n: number) => n.toString(2).split('1').length - 1;
