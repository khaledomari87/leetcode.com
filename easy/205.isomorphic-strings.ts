// https://leetcode.com/problems/isomorphic-strings/solutions/6266243/double-hash-tables/

function isIsomorphic(s: string, t: string) {
    if (s.length !== t.length) return false;
    const STMap = new Map<string, string>();
    const TSMap = new Map<string, string>();
    for (let i = 0; i < s.length; i++) {
        const sItem = STMap.get(s[i]);
        if (sItem === undefined) {
            STMap.set(s[i], t[i]);
            if (TSMap.has(t[i])) return false;
            TSMap.set(t[i], s[i]);
        } else if (sItem !== t[i]) {
            return false;
        } else {
            const tItem = TSMap.get(t[i]);
            if (tItem !== s[i]) return false;
        }
    }
    return true;
}
