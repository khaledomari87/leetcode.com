// https://leetcode.com/problems/count-square-sum-triples/solutions/7399957/double-loops/

function countTriples(n: number) {
    let res = 0;
    for (let a = 1, { floor, sqrt } = Math; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            const c = floor(sqrt(a * a + b * b + 1));
            res += +(c <= n && c * c === a * a + b * b);
        }
    }
    return res;
}
