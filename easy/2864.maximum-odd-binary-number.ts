// https://leetcode.com/problems/maximum-odd-binary-number/solutions/7386994/two-lines/

function maximumOddBinaryNumber(s: string) {
    const c = s.split('').reduce((r, b) => r + +b, 0);
    return `${'1'.repeat(c - 1)}${'0'.repeat(s.length - c)}1`;
}
