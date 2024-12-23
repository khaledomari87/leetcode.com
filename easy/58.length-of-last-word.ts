// https://leetcode.com/problems/length-of-last-word/solutions/6178538/optimum-solution/

function lengthOfLastWord(s: string): number {
    let R = s.length - 1;
    while (R >= 0 && s[R] === ' ') R--;
    let len = 0;
    while (R >= 0 && s[R--] !== ' ') len++;
    return len;
}
