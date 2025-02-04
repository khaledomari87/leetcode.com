// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/6375424/ad-hoc-dfs/

import type TreeNode from '../assets/TreeNode.ts';

function findSecondMinimumValue(root: TreeNode) {
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        if (rootVal < node.val && node.val < res) res = node.val;
        else if (node.val === rootVal) {
            dfs(node.left);
            dfs(node.right);
        }
    };
    let res = Number.POSITIVE_INFINITY;
    const rootVal = root.val;
    dfs(root);
    return Number.isFinite(res) ? res : -1;
}
