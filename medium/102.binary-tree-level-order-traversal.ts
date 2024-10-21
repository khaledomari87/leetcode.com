// https://leetcode.com/problems/binary-tree-level-order-traversal/

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const map = new Map<number, number[]>();
    const fillMap = (node: TreeNode, level = 0) => {
        const arr = map.get(level) || [];
        if (arr.length === 0) map.set(level, arr);
        arr.push(node.val);
        node.left && fillMap(node.left, level + 1);
        node.right && fillMap(node.right, level + 1);
    };
    fillMap(root, 0);

    const output = new Array<number[]>();
    for (let i = 0, size = map.size; i < size; i++) {
        output.push(map.get(i)!);
    }
    return output;
}
