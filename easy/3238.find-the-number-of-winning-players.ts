// https://leetcode.com/problems/find-the-number-of-winning-players/solutions/7581808/clean/

const winningPlayerCount = (n: number, pick: number[][]) =>
    pick.reduce(
        (arr, [x, y]) => (arr[x][y]++, arr),
        Array.from({ length: 101 }, () => new Array(11).fill(0)),
    ).reduce((r, freqs, i) => r + +freqs.some((v) => v > i), 0);
