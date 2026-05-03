// https://leetcode.com/problems/first-letter-to-appear-twice/solutions/8134576/hash-set/

function repeatedCharacter(s: string) {
    const set = new Set<typeof s[number]>();
    for (const c of s) {
        if (set.has(c)) return c;
        set.add(c);
    }
    return '';
}
