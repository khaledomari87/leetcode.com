// https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/7678891/optimal-solution/

const countTestedDevices = (batteryPercentages: number[]) =>
    batteryPercentages.reduce((r, v) => r + +(v > r), 0);
