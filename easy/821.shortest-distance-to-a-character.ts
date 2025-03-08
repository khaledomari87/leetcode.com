// https://leetcode.com/problems/shortest-distance-to-a-character/solutions/6514636/double-traversals/

function shortestToChar(s: string, c: string) {
    const res = new Array<number>(s.length).fill(s.length);
    let pos = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === c) pos = i;
        res[i] = i - pos;
    }
    for (let i = pos - 1; i >= 0; --i) {
        if (s[i] === c) pos = i;
        res[i] = Math.min(res[i], pos - i);
    }
    return res;
}
