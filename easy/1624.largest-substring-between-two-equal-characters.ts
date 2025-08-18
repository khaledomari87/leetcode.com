// https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/7094833/linear-solution/

function maxLengthBetweenEqualCharacters(s: string) {
    const map = new Map([[s[0], 0]]), max = Math.max;
    let res = -1;
    for (let i = 1, n = s.length; i < n; i++) {
        const item = map.get(s[i]);
        item === undefined ? map.set(s[i], i) : res = max(res, i - item - 1);
    }
    return res;
}
