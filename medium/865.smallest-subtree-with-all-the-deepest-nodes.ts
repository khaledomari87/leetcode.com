// https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/6615972/dfs/

import type TreeNode from '../assets/TreeNode.ts';

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
    const dfs = (node: typeof root, depth: number): number => {
        if (!node) return depth;
        const left = dfs(node.left, ++depth);
        const right = dfs(node.right, depth);
        if (left === right && left > resDepth) {
            resDepth = left - 1, resHead = node;
        }
        return Math.max(left, right);
    };
    let resHead = root, resDepth = 0;
    dfs(root, 0);
    return resHead;
}
