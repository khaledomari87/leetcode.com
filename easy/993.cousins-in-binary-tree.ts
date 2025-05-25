// https://leetcode.com/problems/cousins-in-binary-tree/solutions/6779983/clean-dfs/

import TreeNode from '../assets/TreeNode.ts';

function isCousins(root: TreeNode | null, x: number, y: number) {
    const dfs = (node: typeof root, depth: number): boolean => {
        if (!node?.right && !node?.left) return false;

        if (node.left?.val === x || node.right?.val === x) diff += depth, xp = node.val;
        else if (node.left?.val === y || node.right?.val === y) diff -= depth, yp = node.val;

        return xp && yp && !diff || dfs(node.left, ++depth) || dfs(node.right, depth);
    };
    let diff = 0, xp = 0, yp = 0;
    return dfs(root, 0);
}
