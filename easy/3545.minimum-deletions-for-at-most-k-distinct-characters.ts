// https://leetcode.com/problems/minimum-deletions-for-at-most-k-distinct-characters/solutions/7423341/counting-sorting-greedy/

function minDeletion(s: string, k: number) {
    const freq: number[] = new Array(26).fill(0);
    for (let a = 'a'.charCodeAt(0), i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - a]++;
    }
    const sorted = freq.filter((c) => c).sort((a, b) => a - b);
    return sorted.slice(0, Math.max(0, sorted.length - k))
        .reduce((r, c) => r + c, 0);
}
