// https://leetcode.com/problems/make-the-string-great/solutions/7055294/array-splice/

function makeGood(s: string) {
    const res = s.split(''), diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
    for (let i = 0, { abs, max } = Math; i < res.length - 1;) {
        abs(res[i].charCodeAt(0) - res[i + 1].charCodeAt(0)) === diff
            ? (res.splice(i, 2), i = max(0, i - 1))
            : i++;
    }
    return res.join('');
}
