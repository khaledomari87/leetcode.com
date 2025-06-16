// https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/6849054/simple-simulation/

function maximumDifference(n: number[]) {
    let res = -1;
    for (let i = 1, left = n[0]; i < n.length; i++) {
        if (n[i] > left) res = Math.max(res, n[i] - left);
        left = Math.min(left, n[i]);
    }
    return res;
}
