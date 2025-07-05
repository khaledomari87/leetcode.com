// https://leetcode.com/problems/increasing-decreasing-string/solutions/6924414/simulation/

function sortString(s: string) {
    const a = 'a'.charCodeAt(0), n = s.length, alphas = 26;
    const counts = new Array<number>(alphas).fill(0);
    for (let i = 0; i < n; i++) counts[s.charCodeAt(i) - a]++;

    const res: number[] = [];
    while (res.length < n) {
        counts.forEach((cnt, i) => cnt && (res.push(i), --counts[i]));
        for (let i = alphas - 1; i >= 0; i--) {
            if (counts[i]) res.push(i), --counts[i];
        }
    }
    return res.map((v) => String.fromCharCode(a + v)).join('');
}
