// https://leetcode.com/problems/base-7/solutions/6311357/iterative-solution/

function convertToBase7(num: number) {
    let res = '';
    const sign = num < 0 ? '-' : '';
    num = Math.abs(num);
    while (num > 0) {
        res = num % 7 + res;
        num = Math.floor(num / 7);
    }
    return sign + res || '0';
}
