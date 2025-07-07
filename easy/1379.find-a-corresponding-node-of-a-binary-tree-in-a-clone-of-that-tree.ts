// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solutions/6932662/simple-dfs/

import TreeNode from '../assets/TreeNode.ts';

function getTargetCopy(A: TreeNode | null, B: typeof A, T: typeof A) {
    const dfs = (x: typeof A, y: typeof A): typeof A => {
        if (!x || !y || x === T) return y;
        return dfs(x.left, y.left) || dfs(x.right, y.right);
    };
    return dfs(A, B);
}
