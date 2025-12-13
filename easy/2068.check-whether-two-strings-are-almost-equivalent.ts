// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/7411881/counting/

function checkAlmostEquivalent(word1: string, word2: string) {
    const a = 'a'.charCodeAt(0), abs = Math.abs;
    const counts = new Array(26).fill(0);
    for (let i = 0, n = word1.length; i < n; i++) {
        counts[word1.charCodeAt(i) - a]++;
        counts[word2.charCodeAt(i) - a]--;
    }
    return counts.every((c) => abs(c) <= 3);
}
