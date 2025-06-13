// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/6838861/simulation/

function tictactoe(moves: [number, number][]) {
    const grid: string[][] = Array.from({ length: 3 }, () => ['', '', '']);
    for (let m = 0; m < moves.length; m++) {
        const player = ['A', 'B'][m % 2];
        grid[moves[m][0]][moves[m][1]] = player;
        for (let i = 0; i < 3 && m > 1; i++) {
            if (grid[i].every((cell) => cell === player)) return player;
            if (grid.every((row) => row[i] === player)) return player;
        }
        if ([0, 1, 2].every((i) => grid[i][i] === player)) return player;
        if ([0, 1, 2].every((i) => grid[i][2 - i] === player)) return player;
    }
    return grid.some((row) => row.includes('')) ? 'Pending' : 'Draw';
}
