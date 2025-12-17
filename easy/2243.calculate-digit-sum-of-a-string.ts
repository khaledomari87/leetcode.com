// https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/7420197/string-based/

function digitSum(s: string, k: number) {
    const sumDigits = (d: string) => d.split('').reduce((a, b) => a + +b, 0);
    while (s.length > k) {
        const tmp: number[] = [];
        for (let i = 0; i < s.length; i += k) {
            tmp.push(sumDigits(s.substring(i, i + k)));
        }
        s = tmp.join('');
    }
    return s;
}
