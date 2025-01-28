// https://leetcode.com/problems/binary-tree-tilt/solutions/6338717/dfs/

import type TreeNode from '../assets/TreeNode.ts';

function findTilt(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        res += Math.abs(left - right);
        return left + right + node.val;
    };
    let res = 0;
    dfs(root);
    return res;
}
