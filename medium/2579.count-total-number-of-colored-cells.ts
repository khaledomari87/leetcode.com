// https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/6498473/iterative-and-formula-solutions/

function coloredCells(n: number) {
    let res = 1;
    while (--n) res += 4 * n;
    return res;
}

const coloredCellsFormula = (n: number) => 1 + 2 * n * (n - 1);
