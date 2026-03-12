// https://leetcode.com/problems/minimum-capacity-box/solutions/7643948/linear-solution/

// deno-fmt-ignore
const minimumIndex = (capacity: number[], itemSize: number) =>
    capacity.reduce((r, c, i, a) => a[i] >= itemSize &&
        (r === -1 || a[i] < a[r]) ? i : r, -1);
