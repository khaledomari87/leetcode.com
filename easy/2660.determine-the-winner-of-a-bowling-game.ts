// https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/7962994/simulation/

// deno-fmt-ignore
const isWinner = (player1: number[], player2: number[]) => [player1, player2].map((a) =>
    a.reduce((s, v, i) => s + (v << +(i > 0 && a[i - 1] > 9 || i > 1 && a[i - 2] > 9)), 0)
).reduce((s1, s2) => s2 > s1 ? 2 : Math.sign(s1 - s2));
