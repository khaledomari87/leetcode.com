// https://leetcode.com/problems/longest-palindrome/solutions/6290268/efficient-and-readable/

function longestPalindrome(s: string): number {
    const codeA = 'A'.charCodeAt(0);
    const counter = new Array<number>('z'.charCodeAt(0) - codeA + 1);
    for (const char of s) {
        const code = char.charCodeAt(0) - codeA;
        counter[code] = (counter[code] || 0) + 1;
    }
    const even = counter.reduce((res, c) => res + (c >> 1) * 2, 0);
    for (const c of counter) if (c & 1) return even + 1;
    return even;
}
