// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/7678087/hash-map-greedy-sorting/

function minimumPushes(word: string) {
    const freq = new Map<string, number>();
    for (const ch of word) freq.set(ch, (freq.get(ch) || 0) + 1);
    return [...freq].sort((a, b) => b[1] - a[1])
        .reduce((res, [, cnt], i) => res + cnt * (1 + (i >> 3)), 0);
}
