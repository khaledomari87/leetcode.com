// https://leetcode.com/problems/valid-palindrome-ii/solutions/6404901/simple-and-efficient/

function validPalindrome(s: string) {
    const isPalindrome = (l: number, r: number) => {
        while (l < r) if (s[l++] !== s[r--]) return false;
        return true;
    };
    for (let l = 0, r = s.length - 1; l < r; l++, r--) {
        if (s[l] !== s[r]) return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
    }
    return true;
}
