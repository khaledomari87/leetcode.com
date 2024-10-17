// https://leetcode.com/problems/maximum-number-of-balloons/description/

function maxNumberOfBalloons(text: string): number {
    const map: { [key: string]: number } = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    for (const char of text) {
        char in map && map[char]++;
    }
    return Math.floor(Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n));
}

function maxNumberOfBalloons2(text: string): number {
    const map: { [key: string]: number } = {
        'b': 0,
        'a': 0,
        'l': 0,
        'o': 0,
        'n': 0,
    };
    for (const char of text) {
        char in map && map[char]++;
    }
    let output = map.b;
    for (const char in map) {
        const count: number = map[char];
        output = Math.min(output, count / (['l', 'o'].includes(char) ? 2 : 1));
    }
    return Math.floor(output);
}

function maxNumberOfBalloons3(text: string): number {
    const map = new Map([['b', 0], ['a', 0], ['l', 0], ['o', 0], ['n', 0]]);
    for (const char of text) {
        const item = map.get(char);
        if (item !== undefined) {
            map.set(char, item + 1);
        }
    }
    let output = map.get('b') || 0;
    for (const [char, count] of map.entries()) {
        output = Math.min(output, count / (['l', 'o'].includes(char) ? 2 : 1));
    }
    return Math.floor(output);
}
