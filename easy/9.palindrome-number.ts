// https://leetcode.com/problems/palindrome-number/solutions/6132261/string-conversion/

const isPalindrome = (x: number): boolean => {
    for (let s = x.toString(), n = s.length, i = 0; i < n / 2; i++) {
        if (s[i] !== s[n - i - 1]) return false;
    }
    return true;
};
