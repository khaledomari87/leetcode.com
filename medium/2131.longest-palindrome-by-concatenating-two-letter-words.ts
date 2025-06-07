// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/6778964/clean-solution/

function longestPalindrome(words: string[]) {
    const freqs = new Map<string, number>();
    let res = 0;
    for (const word of words) {
        const revCnt = freqs.get(word[1] + word[0]) || 0;
        if (revCnt) (res += 4, freqs.set(word[1] + word[0], revCnt - 1));
        else freqs.set(word, (freqs.get(word) || 0) + 1);
    }
    for (const entry of freqs) {
        if (entry[1] && entry[0][0] === entry[0][1]) return res + 2;
    }
    return res;
}
