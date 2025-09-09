// http://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/7173249/2-lines/

function countConsistentStrings(allowed: string, words: string[]) {
    const set = new Set(allowed);
    return words.reduce((r, w) => r + +w.split('').every((c) => set.has(c)), 0);
}
