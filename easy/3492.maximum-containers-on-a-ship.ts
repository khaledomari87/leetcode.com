// https://leetcode.com/problems/maximum-containers-on-a-ship/solutions/7400810/one-line/

// deno-fmt-ignore
const maxContainers = (n: number, w: number, maxWeight: number) =>
    Math.min(n * n, Math.floor(maxWeight / w));
