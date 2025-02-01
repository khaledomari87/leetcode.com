// https://leetcode.com/problems/merge-two-binary-trees/solutions/6358648/depth-first-search/

import type TreeNode from '../assets/TreeNode.ts';

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null) {
    if (!root1 || !root2) return root1 || root2;
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
}
