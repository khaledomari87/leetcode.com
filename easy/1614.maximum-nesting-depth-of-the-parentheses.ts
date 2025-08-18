// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/7094559/clean-optimal/

function maxDepth(s: string) {
    let depth = 0, res = 0;
    for (const c of s) {
        depth += +(c === '(') - +(c === ')');
        res = Math.max(res, depth);
    }
    return res;
}
