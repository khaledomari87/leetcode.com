// https://leetcode.com/problems/container-with-most-water/solutions/7247249/greedy-two-pointers-with-comments/

// deno-fmt-ignore
function maxArea(H: number[]) {
    const { min, max } = Math, n = H.length;
    let res = 0, l = 0, r = n - 1; // set l & r pointers
    while (l < r) {                // area = 0 when l = r
        const x = r - l;           // x-axis length
        const y = min(H[l], H[r]); // y-axis length
        res = max(res, x * y);     // new area = x * y
        H[l] > H[r] ? r-- : l++;   // move lowest pointer
    }
    return res;
}
