// https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/6498473/iterative-and-formula-solutions/

function coloredCells(n: number) {
    let res = 1, addition = 0;
    while (--n) res += addition += 4;
    return res;
}

const coloredCellsFormula = (n: number) => 1 + n * (n - 1) * 2;
