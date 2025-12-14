// https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/7413145/two-approaches-math-string/

function digitsSum(num: number | string) {
    if (typeof num === 'number') {
        let res = 0;
        while (num) {
            res += num % 10;
            num = Math.floor(num / 10);
        }
        return res;
    } else { // typeof num === 'string'
        return `${num}`.split('').reduce((r, n) => r + +n, 0);
    }
}
function countEven(num: number) {
    let res = 0;
    while (num) {
        res += 1 - digitsSum(num) % 2;
        // res += 1 - digitsSum(`${num}`) % 2;
        num--;
    }
    return res;
}
