// https://leetcode.com/problems/compute-decimal-representation/solutions/7632288/simple-clean/

function decimalRepresentation(n: number) {
    const res: number[] = [], flr = Math.floor;
    for (let p = 0; n; p++, n = flr(n / 10)) {
        if (n % 10) res.push(n % 10 * 10 ** p);
    }
    return res.reverse();
}
