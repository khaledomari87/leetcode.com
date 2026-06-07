// https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/8319180/hash-map-bfs/

import TreeNode from '../assets/TreeNode.ts';
import { Deque } from '@datastructures-js/deque';

function createBinaryTree(desc: number[][]): TreeNode | null {
    const parents = new Set<number>(desc.map((v) => v[0]));
    const map = new Map<number, number[]>();
    for (const [parent, child, left] of desc) {
        parents.delete(child);
        if (!map.has(parent)) map.set(parent, new Array(2));
        map.get(parent)![+!left] = child;
    }
    const root = new TreeNode([...parents][0]);
    const q = Deque.fromArray([root]);
    while (q.size()) {
        const node = q.popFront()!;
        const item = map.get(node.val);
        if (item?.[0]) {
            node.left = new TreeNode(item[0]);
            q.pushBack(node.left);
        }
        if (item?.[1]) {
            node.right = new TreeNode(item[1]);
            q.pushBack(node.right);
        }
    }
    return root;
}
