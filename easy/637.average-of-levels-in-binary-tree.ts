// https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/6366709/bfs/

import type TreeNode from '../assets/TreeNode.ts';

function averageOfLevels(root: TreeNode | null) {
    const bfs: number[][] = [];
    const dfs = (node: TreeNode | null, depth: number) => {
        if (!node) return;
        if (bfs.length <= depth) bfs.push([]);
        bfs[depth].push(node.val);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };
    dfs(root, 0);
    return bfs.map((level) => level.reduce((a, b) => a + b) / level.length);
}
