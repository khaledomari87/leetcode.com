// https://leetcode.com/problems/backspace-string-compare/solutions/6567855/stacks/

function backspaceCompare(s: string, t: string) {
    const a1: typeof s[] = [], a2: typeof a1 = [];
    for (const [str, arr] of [[s, a1], [t, a2]] as const) {
        for (const char of str) {
            arr[char === '#' ? 'pop' : 'push'](char);
        }
    }
    return a1.length === a2.length && a1.every((v, i) => v === a2[i]);
}
