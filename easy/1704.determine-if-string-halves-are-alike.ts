// https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/7276820/simple/

function halvesAreAlike(s: string) {
    const set = new Set('aeiouAEIOU'), n = s.length / 2;
    let a = 0, b = 0;
    for (let i = 0; i < n; i++) {
        a += +set.has(s[i]);
        b += +set.has(s[i + n]);
    }
    return a === b;
}
