// https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/6453361/iterative-with-stack-linear-solution/

import TreeNode from '../assets/TreeNode.ts';

function recoverFromPreorder(traversal: string): TreeNode | null {
    const stack: [TreeNode, number][] = [];
    for (let i = 0, node = null, depth = 0; i < traversal.length; stack.push([node, depth])) {
        depth = traversal.slice(i).match(/^-*/)?.[0].length || 0;
        i += depth;
        while (stack.length > depth) stack.pop();
        const value = traversal.slice(i).match(/\d+/)![0];
        i += value.length;
        node = new TreeNode(+value);
        if (stack.length) {
            const parent = stack.at(-1)![0];
            parent[parent.left ? 'right' : 'left'] = node;
        }
    }
    return stack[0][0];
}
