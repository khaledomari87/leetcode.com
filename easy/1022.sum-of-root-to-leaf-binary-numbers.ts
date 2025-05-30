// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/6794822/dfs-backtracking/

import TreeNode from '../assets/TreeNode.ts';

function sumRootToLeaf(root: TreeNode | null) {
    let res = 0, backtrack = 0;
    const dfs = (node: typeof root) => {
        if (!node) return;
        backtrack = (backtrack << 1) + node.val;
        if (!node.left && !node.right) {
            res += backtrack;
        } else {
            dfs(node.left);
            dfs(node.right);
        }
        backtrack >>>= 1;
    };
    dfs(root);
    return res;
}
