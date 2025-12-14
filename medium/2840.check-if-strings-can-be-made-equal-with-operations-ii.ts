// https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/7413805/two-counters/

function checkStrings(s1: string, s2: string) {
    const a = 'a'.charCodeAt(0);
    const even: number[] = new Array(26).fill(0);
    const odd: number[] = new Array(26).fill(0);
    for (let i = 0, n = s1.length; i < n; i++) {
        const m = i % 2 ? odd : even;
        m[s1.charCodeAt(i) - a]++;
        m[s2.charCodeAt(i) - a]--;
    }
    return [even, odd].every((m) => m.every((v) => !v));
}
