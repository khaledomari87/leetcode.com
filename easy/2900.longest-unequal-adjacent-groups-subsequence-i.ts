// https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/6746245/greedy/

function getLongestSubsequence(words: string[], groups: number[]) {
    const res: string[] = [words[0]];
    for (let i = 1, n = words.length; i < n; i++) {
        if (groups[i] !== groups[i - 1]) res.push(words[i]);
    }
    return res;
}
