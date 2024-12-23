// https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/6177988/very-efficient-and-readable-n-log-n/

import type TreeNode from '../assets/TreeNode.ts';

function minimumOperations(root: TreeNode | null): number {
    const bfsValues: number[][] = [];
    const dfs = (node: TreeNode | null, level: number) => {
        if (!node) return;
        bfsValues[level]?.push(node.val) || (bfsValues[level] = [node.val]);
        dfs(node.left, ++level);
        dfs(node.right, level);
    };
    dfs(root, 0);
    return bfsValues.reduce((total, curr) => total + minSwapsToSort(curr), 0);
}

function minSwapsToSort(arr: number[]): number {
    const sorted = [...arr].sort((a, b) => a - b);
    const valueToIndexMap = arr.reduce((map, val, i) => map.set(val, i), new Map<number, number>());
    return arr.reduce((count, val, i) => {
        if (arr[i] !== sorted[i]) {
            count++;
            const targetIndex = valueToIndexMap.get(sorted[i])!;
            [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]];
            valueToIndexMap.set(arr[targetIndex], targetIndex);
        }
        return count;
    }, 0);
}
