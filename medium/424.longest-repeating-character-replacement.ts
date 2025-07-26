// https://leetcode.com/problems/longest-repeating-character-replacement/solutions/5938897/efficient-and-clean-typescript/

function characterReplacement(s: string, k: number): number {
    const ascii = (char: string) => char.charCodeAt(0);
    const asciiA = ascii('A');

    const counts = new Array<number>(26).fill(0);
    const getMaxCount = () => counts.reduce((prev, curr) => Math.max(prev, curr));
    const increment = (char: string, value = 1) => counts[ascii(char) - asciiA] += value;

    let output = 0;
    for (let L = 0, R = 0; R < s.length; R++) {
        increment(s[R]);
        while (R - L + 1 - getMaxCount() > k) increment(s[L++], -1);
        output = Math.max(output, R - L + 1);
    }
    return output;
}
