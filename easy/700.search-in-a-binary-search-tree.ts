// https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/6430411/one-line-dfs/

import type TreeNode from '../assets/TreeNode.ts';

const searchBST = (root: TreeNode | null, val: number): typeof root =>
    root
        ? root.val === val ? root : val < root.val ? searchBST(root.left, val) : searchBST(root.right, val)
        : null;
