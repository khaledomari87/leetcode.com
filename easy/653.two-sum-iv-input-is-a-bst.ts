// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/6369737/iterative-bfs/

import type TreeNode from '../assets/TreeNode.ts';

function findTarget(root: TreeNode, k: number) {
    const set = new Set<number>(), queue: TreeNode[] = [root];
    while (queue.length) {
        const node = queue.shift()!;
        if (set.has(k - node.val)) return true;
        set.add(node.val);
        [node.left, node.right].forEach((child) => child && queue.push(child));
    }
    return false;
}
