// https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/6441159/combinatorics-approach/

function getHappyString(n: number, k: number) {
    if (k > 2 ** (n - 1) * 3) return '';

    const startB = 1 + (2 ** (n - 1)), startC = startB + (2 ** (n - 1));
    let res = k < startB ? 'a' : k < startC ? 'b' : 'c';
    k < startB ? k-- : k < startC ? k -= startB : k -= startC;

    const nextSmallest = ['b', 'a', 'a'], nextGreatest = ['c', 'c', 'b'];
    for (let i = 1, a = 'a'.charCodeAt(0); i < n; i++) {
        const midpoint = 2 ** (n - i - 1);
        if (k < midpoint) res += nextSmallest[res.charCodeAt(i - 1) - a];
        else (res += nextGreatest[res.charCodeAt(i - 1) - a]) && (k -= midpoint);
    }
    return res;
}

function getHappyString2(n: number, k: number) {
    const total = 3 * (2 ** (n - 1));
    if (total < k) return '';
    const next = [[1, 2], [0, 2], [0, 1]] as const;
    const aCode = 'a'.charCodeAt(0); // 97
    const res: number[] = [aCode + +(k > total / 3) + +(k-- > 2 * total / 3)];
    for (let i = 1; i < n; ++i) {
        res.push(aCode + next[res[i - 1] - aCode][+((k & (2 ** (n - i - 1))) > 0)]);
    }
    return String.fromCharCode(...res);
}
