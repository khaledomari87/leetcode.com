// https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/6449287/hash-set-and-depth-first-search/

import type TreeNode from '../assets/TreeNode.ts';

class FindElements {
    private set = new Set<number>();
    constructor(root: TreeNode | null) {
        const dfs = (node: TreeNode | null, val: number) => {
            if (!node) return;
            this.set.add(val);
            dfs(node.left, val = val * 2 + 1);
            dfs(node.right, val + 1);
        };
        dfs(root, 0);
    }
    find = (target: number) => this.set.has(target);
}
