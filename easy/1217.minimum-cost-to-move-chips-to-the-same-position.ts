// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/6823279/one-line/

const minCostToMoveChips = (pos: number[]) =>
    Math.min(...pos.reduce((res, p) => (++res[p % 2], res), [0, 0]));
