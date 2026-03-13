// https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/7646159/simulation-using-strings/

function minChanges(n: number, k: number) {
    let ks = k.toString(2);
    const ns = n.toString(2).split('');
    if (ns.length < ks.length) return -1;
    ks = ks.padStart(ns.length, '0');
    let res = 0;
    for (let i = 0; i < ns.length; i++) {
        if (+ns[i] < +ks[i]) return -1;
        res += +(+ns[i] > +ks[i]);
    }
    return res;
}
