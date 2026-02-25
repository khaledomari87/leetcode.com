// https://leetcode.com/problems/largest-even-number/solutions/7606346/simple-clean/

function largestEven(s: string) {
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '2') return s.substring(0, i + 1);
    }
    return '';
}
