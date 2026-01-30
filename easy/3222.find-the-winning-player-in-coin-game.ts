// https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/7531142/one-line/

const winningPlayer = (x: number, y: number) => Math.min(x, y >> 2) % 2 ? 'Alice' : 'Bob';
