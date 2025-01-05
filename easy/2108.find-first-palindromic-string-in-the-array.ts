// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/6236199/optimum-solution/

function firstPalindrome(words: string[]) {
    for (const word of words) {
        let i = 0;
        while (i < word.length / 2) {
            if (word[i] !== word[word.length - 1 - i++]) break;
        }
        if (i >= word.length / 2 && word[i] === word[word.length - 1 - i]) return word;
    }
    return '';
}
