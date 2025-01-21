// https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/6309943/iterative-dfs/

import type TreeNode from '../assets/TreeNode.ts';

function findMode(root: TreeNode): number[] {
    const count = new Map<number, number>();
    const stack: TreeNode[] = [root];
    while (stack.length) {
        const node = stack.pop()!;
        count.set(node.val, (count.get(node.val) || 0) + 1);

        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }

    const maxFreq = Math.max(...count.values());
    const res = new Array<number>();
    for (const item of count) {
        if (item[1] === maxFreq) res.push(item[0]);
    }
    return res;
}
