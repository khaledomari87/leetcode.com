// https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/7070395/two-approaches/

function mostVisitedTraversal(n: number, rounds: number[]) {
    const count = new Array<number>(n).fill(0);
    count[rounds[0] - 1]++;
    for (let i = 1, m = rounds.length; i < m; i++) {
        let start = rounds[i - 1];
        let end = rounds[i] - 1;
        if (end < start) end += n;
        while (start <= end) count[start++ % n]++;
    }
    const max = count.reduce((a, b) => Math.max(a, b));
    return count.reduce((a, c, i) => (c === max && a.push(i + 1), a), [] as number[]);
}

const mostVisited = (n: number, rounds: number[]) =>
    rounds[0] <= rounds.at(-1)!
        ? Array.from({ length: rounds.at(-1)! - rounds[0] + 1 }, (_, i) => i + rounds[0])
        : [
            ...Array.from({ length: rounds.at(-1)! }, (_, i) => i + 1),
            ...Array.from({ length: n - rounds[0] + 1 }, (_, i) => i + rounds[0]),
        ];
