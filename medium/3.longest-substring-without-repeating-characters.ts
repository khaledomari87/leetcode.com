// https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/5929622/typescript/

function lengthOfLongestSubstring(s: string): number {
    let output = 0;
    const set = new Set<string>();
    for (let R = 0, L = 0; R < s.length; R++) {
        while (set.has(s[R])) {
            set.delete(s[L]);
            L++;
        }
        set.add(s[R]);
        output = Math.max(output, R - L + 1);
    }
    return output;
}
