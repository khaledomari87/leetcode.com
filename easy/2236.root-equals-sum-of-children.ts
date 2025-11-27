// https://leetcode.com/problems/root-equals-sum-of-children/solutions/7377273/one-line/

import TreeNode from '../assets/TreeNode.ts';

const checkTree = (r: TreeNode) => r.val === r.left!.val + r.right!.val;
