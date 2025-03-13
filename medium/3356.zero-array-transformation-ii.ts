// https://leetcode.com/problems/zero-array-transformation-ii/solutions/6531642/clean-typescript-javascript/

function minZeroArray(nums: number[], queries: [number, number, number][]) {
    let sum = 0, k = 0;
    const diff = new Array<number>(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        while (sum + diff[i] < nums[i]) {
            k += 1;
            if (k > queries.length) return -1;
            const [left, right, val] = queries[k - 1];
            if (right >= i) {
                diff[Math.max(left, i)] += val;
                diff[right + 1] -= val;
            }
        }
        sum += diff[i];
    }
    return k;
}
