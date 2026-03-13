// https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/7646101/optimal-solution/

const canAliceWin = (nums: number[]) =>
    nums.reduce((a, b) => a + b * +(b < 10), 0) !=
        nums.reduce((a, b) => a + b * +(b > 9), 0);
