// https://leetcode.com/problems/longest-balanced-substring-i/solutions/7572860/enumeration/

function longestBalanced(s: string) {
    let res = 0;
    for (let i = 0, a = 'a'.charCodeAt(0); i < s.length; i++) {
        const freq = new Array<number>(26).fill(0);
        for (let j = i; j < s.length; j++) {
            const f = ++freq[s[j].charCodeAt(0) - a];
            if (freq.every((v) => !v || v === f)) {
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
}
