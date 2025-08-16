// https://leetcode.com/problems/maximum-69-number/solutions/6851510/one-line/

const maximum69Number = (n: number) => +String(n).replace('6', '9');

function maximum69NumberTraversal(n: number) {
    for (let i = 0, s = String(n); i < s.length; i++) {
        if (s[i] === '6') {
            return +`${s.slice(0, i)}9${s.slice(i + 1)}`;
        }
    }
    return n;
}

function maximum69NumberWithoutString(n: number) {
    let res = 0, p = 0, pos = -Infinity;
    while (n) {
        if (n % 10 === 6) {
            res += 6 * 10 ** pos;
            pos = p;
        } else {
            res += n % 10 * 10 ** p;
        }
        n = Math.floor(n / 10);
        p++;
    }
    return res + 9 * 10 ** pos;
}
