// https://leetcode.com/problems/roman-to-integer/solutions/5888137/simple-and-efficient/

function romanToInt(s: string) {
    const map: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    } as const;
    let prev = map[s[s.length - 1]], res = prev;
    for (let i = s.length - 2; i >= 0; i--) {
        res += (prev > map[s[i]] ? -1 : 1) * map[s[i]];
        prev = map[s[i]];
    }
    return res;
}
