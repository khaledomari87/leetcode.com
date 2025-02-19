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
