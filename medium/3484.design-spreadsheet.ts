// https://leetcode.com/problems/design-spreadsheet/solutions/7204195/simple/

class Spreadsheet {
    private A = 'A'.charCodeAt(0);
    private rows: number[][];
    constructor(rows: number) {
        this.rows = Array.from({ length: rows }, () => new Array(26).fill(0));
    }
    setCell(cell: string, value: number) {
        this.rows[+cell.substring(1) - 1][cell.charCodeAt(0) - this.A] = value;
    }
    resetCell(cell: string) {
        this.rows[+cell.substring(1) - 1][cell.charCodeAt(0) - this.A] = 0;
    }
    getValue(formula: string) {
        return formula.substring(1).split('+').map((val) => {
            if (/^\d+$/.test(val)) return +val;
            return this.rows[+val.substring(1) - 1][val.charCodeAt(0) - this.A];
        }).reduce((a, b) => a + b);
    }
}
