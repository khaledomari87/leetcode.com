// https://leetcode.com/problems/number-of-changing-keys/solutions/7223749/two-approaches/

function countKeyChanges(s: string) {
    let res = 0;
    for (let i = 1, n = s.length; i < n; i++) {
        res += +(s[i].toLowerCase() !== s[i - 1].toLowerCase());
    }
    return res;
}

function countKeyChanges2(s: string) {
    const margin = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
    const abs = Math.abs, n = s.length;
    let res = 0, i = 0, prev = s.charCodeAt(i++);
    while (i < n) {
        const curr = s.charCodeAt(i++);
        const diff = abs(curr - prev);
        res += +(diff && diff !== margin);
        prev = curr;
    }
    return res;
}
