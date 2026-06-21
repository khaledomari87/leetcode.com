// https://leetcode.com/problems/exactly-one-consecutive-set-bits-pair/solutions/8347195/regexp/

function consecutiveSetBits(n: number) {
    let i = 0;
    for (const _ of n.toString(2).matchAll(/(?=(11))/g)) {
        if (++i > 1) return false;
    }
    return i === 1;
}
