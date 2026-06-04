// https://leetcode.com/problems/total-waviness-of-numbers-in-range-i/solutions/8314144/brute-force/

function totalWaviness(num1: number, num2: number) {
    let res = 0;
    for (let i = num1; i <= num2; i++) {
        for (let j = 1, s = `${i}`, m = s.length - 1; j < m; j++) {
            res += +(s[j - 1] < s[j] && s[j] > s[j + 1] ||
                s[j - 1] > s[j] && s[j] < s[j + 1]);
        }
    }
    return res;
}
