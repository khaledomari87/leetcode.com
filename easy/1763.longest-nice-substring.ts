// https://leetcode.com/problems/longest-nice-substring/solutions/8302965/brute-force/

function longestNiceSubstring(s: string) {
    let start = 0, end = 0;
    for (let i = 0, a = 97, A = 65, l = -Infinity; i < s.length; i++) {
        const cnt = new Array<number>(26).fill(0);
        for (let j = i; j < s.length; j++) {
            cnt[s.charCodeAt(j) - (s[j] < 'a' ? A : a)] |= s[j] < 'a' ? 1 : 2;
            if (cnt.every((v) => v === 0 || v === 3) && j - i + 1 > l) {
                l = Math.max(l, j - i + 1);
                start = i, end = j + 1;
            }
        }
    }
    return s.substring(start, end);
}
