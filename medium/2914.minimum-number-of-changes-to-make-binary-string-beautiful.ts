// https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6012776/simplest-and-fastest-solution-possible/

function minChanges(s: string): number {
    let output = 0;
    for (let i = 1; i < s.length; s[i] !== s[i - 1] && output++, i += 2);
    return output;
}
