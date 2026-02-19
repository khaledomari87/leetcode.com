// https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/7591451/simple/

function stableMountains(height: number[], threshold: number) {
    const res: number[] = [];
    for (let i = 1, n = height.length; i < n; i++) {
        if (height[i - 1] > threshold) res.push(i);
    }
    return res;
}
