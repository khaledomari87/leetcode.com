// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/7798996/clean/

function cellsInRange(s: string) {
    const res: string[] = [];
    for (let c = s.charCodeAt(0); c <= s.charCodeAt(3); c++) {
        for (let r = +s[1]; r <= +s[4]; r++) {
            res.push(String.fromCharCode(c) + r);
        }
    }
    return res;
}
