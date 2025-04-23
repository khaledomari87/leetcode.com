// https://leetcode.com/problems/count-largest-group/solutions/6679208/string-and-math-approaches/

function sumStr(num: number) {
    return num.toString().split('').reduce((s, v) => s + +v, 0);
}
function sumMath(num: number) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
function countLargestGroup(n: number) {
    const map = new Map<number, number>();
    for (let i = 1; i <= n; i++) {
        const sum = sumMath(i);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    const values = Array.from(map.values());
    const max = values.reduce((a, b) => Math.max(a, b));
    return values.reduce((sum, cnt) => sum + +(cnt === max), 0);
}
function countLargestGroupArray(n: number, maxDigitSum = 36) {
    const map = new Array<number>(maxDigitSum + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        const sum = sumMath(i);
        map[sum]++;
    }
    const max = map.reduce((a, b) => Math.max(a, b));
    return map.reduce((sum, cnt) => sum + +(cnt === max), 0);
}
