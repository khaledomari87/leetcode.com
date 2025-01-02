// https://leetcode.com/problems/first-unique-character-in-a-string/solutions/6220407/clean-and-efficient/

function firstUniqChar(s: string): number {
    const ascii = (char: string) => char.charCodeAt(0);
    const asciiA = ascii('a');
    const map = new Array<number>(26).fill(0);
    const index = (char: string) => ascii(char) - asciiA;
    const inc = (char: string) => map[index(char)]++;

    for (let i = 0; i < s.length; i++) {
        inc(s[i]);
    }
    for (let i = 0; i < s.length; i++) {
        if (map[index(s[i])] === 1) return i;
    }
    return -1;
}
