// https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/solutions/6827828/clean-ts-js/

function maxDifference(s: string) {
    const a = 'a'.charCodeAt(0), cnt = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        cnt[s.charCodeAt(i) - a]++;
    }
    let even = Infinity, odd = -Infinity;
    for (let i = 0, { min, max } = Math; i < 26; i++) {
        if (cnt[i] % 2) odd = max(odd, cnt[i]);
        else if (cnt[i]) even = min(even, cnt[i]);
    }
    return odd - even;
}
