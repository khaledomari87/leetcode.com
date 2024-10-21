// https://leetcode.com/problems/permutation-in-string/description/

function checkInclusion(s1: string, s2: string): boolean {
    if (s2.length < s1.length) return false;

    const ascii = (char: string) => char.charCodeAt(0);
    const asciiA = ascii('a');
    const charsCounts = new Array<number>(26).fill(0);
    const increment = (char: string, value = 1) => charsCounts[ascii(char) - asciiA] += value;
    // s1 sets the counts negatives, s2 sliding window must resets all counts to 0
    const checkPermutation = () => charsCounts.every((v) => v === 0);

    for (const s of s1) increment(s, -1); // intially s1 chars are counted in negatives

    let R = 0;
    while (R < s1.length) {
        increment(s2[R++]);
    }
    if (checkPermutation()) return true; // check if s1 permutation is at the beginning of s2

    let L = 0; // At this point R = s1.length, i.e. the sliding window size = s1.length
    // Move the sliding window then check if s1 permutation is found
    while (R < s2.length) {
        increment(s2[L++], -1);
        increment(s2[R++]);
        if (checkPermutation()) return true;
    }
    return false;
}
