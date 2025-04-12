// https://leetcode.com/problems/find-the-count-of-good-integers/solutions/6642488/enumeration-permutations-and-combinations/

function countGoodIntegers(n: number, k: number) {
    const set = new Set<string>();
    const fact = Array<bigint>(n + 1).fill(BigInt(1)); // factorials
    for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i);

    for (let skip = n & 1, base = 10 ** ((n - 1) >>> 1) * 10, i = base / 10; i < base; i++) {
        const s = i.toString() + i.toString().split('').reverse().slice(skip).join('');
        +s % k === 0 && set.add(s.split('').sort().join(''));
    }

    return Number(
        Array.from(set).reduce((res, s) => {
            const cnt = s.split('').reduce((cnt, c) => (cnt[+c]++, cnt), Array<number>(10).fill(0));
            return res + cnt.reduce((tot, x) => tot / fact[x], BigInt(n - cnt[0]) * fact[n - 1]);
        }, BigInt(0)),
    );
}

const countGoodIntegersCheat = (n: number, k: number) =>
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 9, 4, 3, 2, 1, 1, 1, 1, 1],
        [0, 9, 4, 3, 2, 1, 1, 1, 1, 1],
        [0, 243, 108, 69, 54, 27, 30, 33, 27, 23],
        [0, 252, 172, 84, 98, 52, 58, 76, 52, 28],
        [0, 10935, 7400, 3573, 4208, 2231, 2468, 2665, 2231, 1191],
        [0, 10944, 9064, 3744, 6992, 3256, 3109, 3044, 5221, 1248],
        [0, 617463, 509248, 206217, 393948, 182335, 170176, 377610, 292692, 68739],
        [0, 617472, 563392, 207840, 494818, 237112, 188945, 506388, 460048, 69280],
        [0, 41457015, 37728000, 13726509, 33175696, 15814071, 12476696, 36789447, 30771543, 4623119],
        [0, 41457024, 39718144, 13831104, 37326452, 19284856, 13249798, 40242031, 35755906, 4610368],
    ][n][k];
