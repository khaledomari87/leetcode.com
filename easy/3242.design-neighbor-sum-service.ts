// https://leetcode.com/problems/design-neighbor-sum-service/solutions/7386184/clean-solution-running-tests-script/

class NeighborSum {
    private map;
    private n;
    constructor(private grid: number[][]) {
        this.n = grid.length;
        this.map = grid.reduce(
            (a, row, i) => row.reduce((b, n, j) => b.set(n, [i, j]), a),
            new Map<number, [number, number]>(),
        );
    }
    private getValue(i: number, j: number) {
        return i > -1 && j > -1 && i < this.n && j < this.n ? this.grid[i][j] : 0;
    }
    adjacentSum(value: number) {
        const [i, j] = this.map.get(value)!;
        return [[1, 0], [-1, 0], [0, 1], [0, -1]].reduce((s, [r, c]) => s + this.getValue(i + r, j + c), 0);
    }
    diagonalSum(value: number) {
        const [i, j] = this.map.get(value)!;
        return [[1, 1], [1, -1], [-1, 1], [-1, -1]].reduce((s, [r, c]) => s + this.getValue(i + r, j + c), 0);
    }
}

const tests = [
    ['NeighborSum', 'adjacentSum', 'adjacentSum', 'diagonalSum', 'diagonalSum'],
    ['NeighborSum', 'adjacentSum', 'diagonalSum'],
];
const params = [
    [[[[0, 1, 2], [3, 4, 5], [6, 7, 8]]], [1], [4], [4], [8]],
    [[[[1, 2, 0, 3], [4, 7, 15, 6], [8, 9, 10, 11], [12, 13, 14, 5]]], [15], [9]],
];
let obj: NeighborSum;
tests.forEach((funcs, i) => {
    funcs.forEach((method, j) => {
        if (!j) {
            obj = new NeighborSum(params[i][j][0] as number[][]);
            console.log(`\n######## Test Case ${i} ########`);
        } else {
            console.log(
                `${method}(${params[i][j][0]})`,
                obj[method[0] === 'a' ? 'adjacentSum' : 'diagonalSum'](params[i][j][0] as number),
            );
        }
    });
});
