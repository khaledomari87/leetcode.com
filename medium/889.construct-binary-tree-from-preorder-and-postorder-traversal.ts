// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/6457660/recursive-tree-constructor/

import TreeNode from '../assets/TreeNode.ts';

function constructFromPrePost(pre: number[], post: number[]) {
    const build = (root = new TreeNode(pre[i++])) => {
        (['left', 'right'] as const).forEach((c) => root.val != post[j] && (root[c] = build()));
        j++;
        return root;
    };
    let i = 0, j = 0;
    return build();
}
