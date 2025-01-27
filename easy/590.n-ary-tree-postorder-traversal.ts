// https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/6336682/dfs/

import type _Node from '../assets/_Node.ts';

function postorder(root: _Node | null): number[] {
    const res: number[] = [];
    const dfs = (node: _Node | null) => {
        if (!node) return;
        node.children.forEach((child) => dfs(child));
        res.push(node.val);
    };
    dfs(root);
    return res;
}
