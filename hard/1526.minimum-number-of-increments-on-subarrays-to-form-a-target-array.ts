// https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/7312715/linear-solution/

function minNumberOperations(target: number[]) {
    let res = target[0];
    // deno-fmt-ignore
    for (let i = 1, n = target.length, max = Math.max;
        i < n; i++) res += max(0, target[i] - target[i - 1]);
    return res;
}
