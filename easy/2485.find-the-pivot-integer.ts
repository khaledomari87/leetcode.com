// https://leetcode.com/problems/find-the-pivot-integer/solutions/8305149/optimal-solution-constant-space/

function pivotInteger(n: number) {
    let post = 0;
    for (let i = 1; i <= n; i++) post += i;
    for (let i = 1, pre = 0; i <= n; i++) {
        pre += i;
        if (pre === post) return i;
        post -= i;
    }
    return -1;
}
