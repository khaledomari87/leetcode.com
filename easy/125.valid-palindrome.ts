// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
    const isToSkip = (char: string): boolean =>
        (char < 'A' || char > 'Z') && (char < '0' || char > '9');
    let left = 0, right = s.length - 1;
    while (left < right) {
        const lChar = s[left].toUpperCase();
        if (isToSkip(lChar)) {
            left++;
            continue;
        }
        const rChar = s[right].toUpperCase();
        if (isToSkip(rChar)) {
            right--;
            continue;
        }
        if (lChar !== rChar) {
            return false;
        }
        right--;
        left++;
    }
    return true;
}
