// https://leetcode.com/problems/largest-odd-number-in-string/solutions/7484327/greedy/

function largestOddNumber(num: string) {
    for (let j = num.length - 1; j >= 0; j--) {
        if (+num[j] % 2) return num.slice(0, j + 1);
    }
    return '';
}
