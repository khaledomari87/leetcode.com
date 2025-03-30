// https://leetcode.com/problems/binary-gap/solutions/6597707/n-tostring-2/

function binaryGap(n: number) {
    let res = 0;
    for (let L = 0, R = 1, bin = n.toString(2); R < bin.length; R++) {
        if (bin[R] === '1') res = Math.max(res, R - L), L = R;
    }
    return res;
}
