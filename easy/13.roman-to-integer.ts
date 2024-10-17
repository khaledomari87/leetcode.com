// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {
    const mapper: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    } as const;

    let previous = mapper[s[s.length - 1]];
    let result = previous;
    for (let i = s.length - 2; i >= 0; i--) {
        const current = mapper[s[i]];
        result += previous > current ? -current : current;
        previous = current;
    }
    return result;
}
