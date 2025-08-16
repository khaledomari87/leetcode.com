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
