// https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/7305410/sliding-window/

function divisorSubstrings(num: number, k: number) {
    const s = String(num), n = s.length;
    let res = 0, l = 0, r = k;
    while (r <= n) {
        const div = +s.substring(l++, r++);
        res += div && +!(num / div % 1);
    }
    return res;
}
