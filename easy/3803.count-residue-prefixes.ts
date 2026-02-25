// https://leetcode.com/problems/count-residue-prefixes/solutions/7606321/hash-set/

function residuePrefixes(s: string) {
    const set = new Set<string>();
    let res = 0;
    for (let i = 0; i < s.length && set.size < 3; i++) {
        res += +((i + 1) % 3 === set.add(s[i]).size);
    }
    return res;
}
