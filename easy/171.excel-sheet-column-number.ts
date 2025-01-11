// https://leetcode.com/problems/excel-sheet-column-number/solutions/6265964/optimum-solution/

function titleToNumber(col: string) {
    const AMinus1 = 'A'.charCodeAt(0) - 1;
    let res = 0;
    for (let i = 0; i < col.length; i++) {
        res += (col.charCodeAt(i) - AMinus1) * (26 ** (col.length - i - 1));
    }
    return res;
}
