// https://leetcode.com/problems/check-ascii-palindromic/solutions/8488618/2-lines-simulation/

function isPalindromic(s: string): boolean {
    const b = [...s]
        .map((c) => c.charCodeAt(0).toString(2).padStart(8, '0'))
        .join('');
    return b === [...b].reverse().join('');
}
