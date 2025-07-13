// https://leetcode.com/problems/combination-sum-iii/solutions/6951503/recursive-backtracking/

function combinationSum3(k: number, n: number, limit = 9) {
    const recur = (i: number, sum: number) => {
        if (sum === n && backtrack.length === k) {
            res.push(backtrack.slice());
            return;
        }
        if (sum > n || backtrack.length > k || i > limit) return;
        recur(i + 1, sum);
        backtrack.push(i);
        recur(i + 1, sum + i);
        backtrack.pop();
    };
    const backtrack: number[] = [];
    const res: number[][] = [];
    recur(1, 0);
    return res;
}
