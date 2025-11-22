// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/7367294/math/

function countBalls(low: number, high: number) {
    const map: number[] = new Array(46).fill(0);
    const { max, floor } = Math;
    let res = 0;
    for (let num = low; num <= high; num++) {
        let total = 0;
        for (let tmp = num; tmp; tmp = floor(tmp / 10)) {
            total += tmp % 10;
        }
        res = max(res, ++map[total]);
    }
    return res;
}
