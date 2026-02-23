// https://leetcode.com/problems/reverse-letters-then-special-characters-in-a-string/solutions/7603517/two-stack-index-reversal/

function reverseByType(s: string) {
    const a: number[] = [], b: number[] = [];
    for (let i = 0; i < s.length; i++) {
        (s[i] < 'a' ? b : a).push(i);
    }
    return Array.from(
        { length: s.length },
        (_, i) => s[(s[i] < 'a' ? b : a).pop()!],
    ).join('');
}
