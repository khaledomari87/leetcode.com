// https://leetcode.com/problems/validate-binary-search-tree/solutions/5952212/efficient-and-simple-one-line/

import type TreeNode from '../assets/TreeNode.ts';

const isValidBST = (
    root: TreeNode | null,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
): boolean =>
    !root ||
    root.val > min && root.val < max && isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max);
