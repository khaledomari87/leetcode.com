// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/7472641/bfs-dfs/

import TreeNode from '../assets/TreeNode.ts';

function maxLevelSum(root: TreeNode) {
    let res = 0;
    for (let lvl = 1, mx = -Infinity, q = [root]; q.length; lvl++) {
        const n = q.length;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += q[i].val;
            [q[i].left, q[i].right].forEach((ch) => ch && q.push(ch));
        }
        if (sum > mx) res = lvl, mx = sum;
        q = q.slice(n);
    }
    return res;
}

function maxLevelSumDFS(root: TreeNode) {
    const dfs = (node: TreeNode | null, lvl: number) => {
        if (!node) return;
        if (lvl >= sums.length) sums.push(0);
        sums[lvl] += node.val;
        dfs(node.left, lvl + 1);
        dfs(node.right, lvl + 1);
    };
    const sums: number[] = [0];
    dfs(root, 0);
    return sums.reduce(
        (a, b, i) => b > a[0] ? [b, i + 1] : a,
        [-Infinity, 0],
    )[1];
}
