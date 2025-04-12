// https://leetcode.com/problems/increasing-order-search-tree/solutions/6643636/dfs/

import TreeNode from '../assets/TreeNode.ts';

function increasingBST(A: TreeNode | null, B: typeof A = null): typeof A {
    if (!A) return B;
    const res = increasingBST(A.left, A);
    return (A.right = increasingBST(A.right, B), A.left = null, res);
}
