// https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/7764630/hash-set/

function maximumNumberOfStringPairs(words: string[]) {
    const seen = new Set<string>();
    let res = 0;
    for (const s of words) {
        if (seen.has(`${s[1]}${s[0]}`)) res++;
        else seen.add(s);
    }
    return res;
}
