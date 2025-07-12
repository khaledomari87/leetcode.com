// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/6949184/simple-and-optimal/

function kLengthApart(nums: (0 | 1)[], k: number) {
    for (let L = nums.indexOf(1), R = L + 1; R < nums.length; R++) {
        if (nums[R]) {
            if (R - L - 1 < k) return false;
            L = R;
        }
    }
    return true;
}
