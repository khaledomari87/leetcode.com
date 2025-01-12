// https://leetcode.com/problems/count-complete-tree-nodes/solutions/6270240/linear-solution/

import type TreeNode from '../assets/TreeNode.ts';

const countNodes = (root: TreeNode | null): number =>
    root && 1 + countNodes(root.left) + countNodes(root.right) || 0;
