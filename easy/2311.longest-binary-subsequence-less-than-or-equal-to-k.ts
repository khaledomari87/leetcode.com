// https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/6887277/greedy-approach/

function longestSubsequence(s: string, k: number) {
    const n = s.length, range = Math.log2(k) + 1;
    let res = 0, i = -1, sum = 0;
    while (++i < n) {
        const digit = s.at(-i - 1)!;
        if (digit === '0') res++;
        else if (i < range && sum + (1 << i) <= k) {
            sum += 2 ** i; // sum += 1 << i;
            res++;
        }
    }
    return res;
}
