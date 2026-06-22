// https://leetcode.com/problems/maximum-number-of-balloons/solutions/8351069/counting/

function maxNumberOfBalloons(text: string): number {
    const map: { [key: string]: number } = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    for (const char of text) {
        if (char in map) map[char]++;
    }
    return Math.floor(Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n));
}

function maxNumberOfBalloons2(text: string): number {
    const map: { [key: string]: number } = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    for (const char of text) {
        char in map && map[char]++;
    }
    let res = 0;
    for (const char in map) {
        res = Math.min(res, map[char] / (1 + +['l', 'o'].includes(char)));
    }
    return Math.floor(res);
}

function maxNumberOfBalloons3(text: string): number {
    const map = new Map([['b', 0], ['a', 0], ['l', 0], ['o', 0], ['n', 0]]);
    for (const char of text) {
        const item = map.get(char);
        if (item !== undefined) {
            map.set(char, item + 1);
        }
    }
    let res = 0;
    for (const [char, count] of map.entries()) {
        res = Math.min(res, count / (1 + +['l', 'o'].includes(char)));
    }
    return Math.floor(res);
}
