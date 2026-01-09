// https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/7480730/greedy/

function removeDigit(number: string, digit: string) {
    const n = number.length - 1, arr = number.split('');
    let i = arr.findIndex((d, i, a) => d === digit && (i < n && d < a[i + 1]));
    if (i === -1) i = arr.lastIndexOf(digit);
    return arr.splice(i, 1).join('');
}
