// https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/6825504/prefix-tree/

function findKthNumber(n: number, k: number) {
    const countSteps = (prefix1: number) => {
        let steps = 0, prefix2 = prefix1 + 1;
        while (prefix1 <= n) {
            steps += Math.min(n + 1, prefix2) - prefix1;
            prefix1 *= 10, prefix2 *= 10;
        }
        return steps;
    };
    let curr = 1;
    k--;
    while (k > 0) {
        const step = countSteps(curr);
        step > k ? (curr *= 10, k--) : (curr += 1, k -= step);
    }
    return curr;
}
