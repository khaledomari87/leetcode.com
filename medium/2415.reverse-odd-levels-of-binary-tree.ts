// https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/6167012/bfs-using-dfs-and-a-hash-table-by-khaled-35cd/

import type TreeNode from '../assets/TreeNode.ts';

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    const map = new Map<number, TreeNode[]>(); // level => nodes[]
    const dfs = (node: TreeNode | null, level: number) => {
        if (!node) return;
        if (level % 2 === 1) {
            let arr = map.get(level);
            if (!arr) {
                map.set(level, arr = []);
            }
            arr.push(node);
        }
        dfs(node.left, ++level);
        dfs(node.right, level);
    };
    dfs(root, 0);
    for (const arr of map.values()) {
        for (let j = 0, len = arr.length; j < len / 2; j++) {
            [arr[j].val, arr[len - j - 1].val] = [arr[len - j - 1].val, arr[j].val];
        }
    }
    return root;
}

// reverseOddLevels(
//     new TreeNode(
//         2,
//         new TreeNode(3, new TreeNode(8), new TreeNode(13)),
//         new TreeNode(5, new TreeNode(21), new TreeNode(34)),
//     ),
// );
