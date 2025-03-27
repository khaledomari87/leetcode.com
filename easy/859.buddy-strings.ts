// https://leetcode.com/problems/buddy-strings/solutions/6586113/linear-solution/

function buddyStrings(s: string, t: string) {
    if (s.length !== t.length) return false;
    if (s === t && new Set(s).size < s.length) return true;
    const diff: number[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i] && diff.push(i) > 2) return false;
    }
    const [i, j] = diff;
    return diff.length == 2 && s[i] === t[j] && s[j] == t[i];
}
