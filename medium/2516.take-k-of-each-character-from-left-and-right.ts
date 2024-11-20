// https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6064636/linear-solution/

function takeCharacters(s: string, k: number): number {
    const ascii = (char: string) => char.charCodeAt(0);
    const asciiA = ascii('a');
    const counts = [0, 0, 0];
    const inc = (index: number, val = 1) => counts[ascii(s[index]) - asciiA] += val;
    const isValid = () => counts.every((c) => c >= k);

    for (let i = 0; i < s.length; i++) inc(i);
    if (!isValid()) return -1;

    let middleWindowSize = Number.NEGATIVE_INFINITY; // Middle window, to be maximized.
    for (let L = 0, R = 0; R < s.length && isValid(); R++) {
        inc(R, -1);
        while (!isValid()) inc(L++);
        middleWindowSize = Math.max(middleWindowSize, R - L);
    }
    return s.length - middleWindowSize - 1;
}
