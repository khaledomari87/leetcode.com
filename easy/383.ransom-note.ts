// https://leetcode.com/problems/ransom-note/solutions/5900803/simple-readable-and-efficient/

function canConstruct(ransomNote: string, magazine: string): boolean {
    const ascii = (char: string) => char.charCodeAt(0);
    const asciiA = ascii('a');
    const counts = new Array<number>(26).fill(0);
    const inc = (char: string, val = 1) => counts[ascii(char) - asciiA] += val;

    for (const char of magazine) inc(char);
    for (const char of ransomNote) if (inc(char, -1) < 0) return false;
    return true;
}
