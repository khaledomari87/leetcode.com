// https://leetcode.com/problems/reverse-string/submissions/1420930911/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    for (let left = 0; left < s.length / 2; left++) {
        const right = s.length - left - 1;
        [s[left], s[right]] = [s[right], s[left]];
    }
}
