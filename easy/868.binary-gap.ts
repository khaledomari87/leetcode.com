// https://leetcode.com/problems/binary-gap/solutions/6597707/n-tostring-2/

function binaryGap(n: number) {
    let res = 0;
    for (let L = 0, R = 1, bin = n.toString(2); R < bin.length; R++) {
        if (bin[R] === '1') res = Math.max(res, R - L), L = R;
    }
    return res;
}

function binaryGap2(n: number) {
    let res = 0;
    for (let l = Infinity, r = 0; n; r++, n >>= 1) {
        if (n % 2) res = Math.max(res, r - l), l = r;
    }
    return res;
}
