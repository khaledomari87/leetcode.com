// https://leetcode.com/problems/generate-parentheses/solutions/6006483/most-efficient-solution-using-recursive-backtracking/

function generateParenthesis(n: number): string[] {
    const res: string[] = [];
    const backtrack = (openCount: number, closeCount: number, accumStr: string) => {
        if (closeCount === n) {
            res.push(accumStr);
            return;
        }
        openCount < n && backtrack(openCount + 1, closeCount, accumStr + '(');
        closeCount < openCount && backtrack(openCount, closeCount + 1, accumStr + ')');
    };
    backtrack(0, 0, '');
    return res;
}
