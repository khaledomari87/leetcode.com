// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/7409702/sliding-window/

function countGoodSubstrings(s: string) {
    let res = 0;
    for (let i = 0, n = s.length - 2; i < n; i++) {
        if (new Set(s.substring(i, i + 3)).size === 3) res++;
    }
    return res;
}
