// https://leetcode.com/problems/house-robber-iv/solutions/6538852/clean-binary-search/

function minCapability(nums: number[], k: number) {
    let L = 1, R = nums.reduce((a, b) => Math.max(a, b));
    while (L < R) {
        const M = L + R >>> 1;
        let res = 0;
        for (let i = 0; i < nums.length && res < k; i++) {
            if (nums[i] <= M) ++res && i++; // Skip the adjacent house
        }
        res >= k ? R = M : L = M + 1;
    }
    return L; // or return R, since L == R
}
