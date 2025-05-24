// https://leetcode.com/problems/univalued-binary-tree/solutions/6776834/one-line/

import TreeNode from '../assets/TreeNode.ts';

const isUnivalTree = (nd: TreeNode | null, v = nd!.val): boolean =>
    !nd || nd.val === v && isUnivalTree(nd.left, v) && isUnivalTree(nd.right, v);
