// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/7427046/min-of-left-right-distance/

function minTimeToType(word: string) {
    const map: Map<string, number> = 'abcdefghijklmnopqrstuvwxyz'
        .split('').reduce((m, c, i) => m.set(c, i), new Map());
    const { abs, min } = Math, size = map.size;
    let res = word.length, curr = 0;
    for (const char of word) {
        const targ = map.get(char)!;
        const distance = abs(targ - curr);
        res += min(distance, size - distance);
        curr = targ;
    }
    return res;
}
