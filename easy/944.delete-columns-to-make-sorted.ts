// https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/6772843/simple-counting/

function minDeletionSize(strs: string[]) {
    let res = 0;
    for (let i = 0, m = strs.length, n = strs[0].length; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (strs[j - 1][i] > strs[j][i]) {
                res++;
                break;
            }
        }
    }
    return res;
}

// deno-fmt-ignore
const minDeletionSizeOneLine = (s: string[]) => s[0].split('').reduce(
    (r, _, i) => r + +s.some((_, j) => j > 0 && s[j - 1][i] > s[j][i]), 0);
