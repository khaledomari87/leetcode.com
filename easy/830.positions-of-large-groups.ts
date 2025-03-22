// https://leetcode.com/problems/positions-of-large-groups/solutions/6567472/two-pointers/

function largeGroupPositions(s: string, minLength = 3) {
    const res: [number, number][] = [];
    let l = 0, r = -1;
    while (++r < s.length) {
        if (s[r] !== s[l]) {
            if (r - l >= minLength) res.push([l, r - 1]);
            l = r;
        }
    }
    if (r - l >= minLength) res.push([l, r - 1]);
    return res;
}
