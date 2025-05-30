// https://leetcode.com/problems/remove-outermost-parentheses/solutions/6794749/greedy/

function removeOuterParentheses(s: string) {
    const res: string[] = [];
    for (let i = 1, open = 1, n = s.length - 1; i < n; i++) {
        open -= +(s[i] === ')');
        if (open) res.push(s[i]);
        open += +(s[i] === '(');
    }
    return res.join('');
}
