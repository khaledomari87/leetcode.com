// https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/6842082/clean-functional-programming/

function minMaxDifference(n: number) {
    const str = n.toString(), minNum = +str.replaceAll(str[0], '0');
    const maxDigit = str.split('').find((d) => d !== '9');
    return (maxDigit ? +str.replaceAll(maxDigit, '9') : n) - minNum;
}
