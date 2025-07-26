// https://leetcode.com/problems/invert-binary-tree/solutions/5940214/typescript/

import type TreeNode from '../assets/TreeNode.ts';

function invertTree(root: TreeNode | null): TreeNode | null {
    root && ([root.left, root.right] = [invertTree(root.right), invertTree(root.left)]);
    return root;
}
