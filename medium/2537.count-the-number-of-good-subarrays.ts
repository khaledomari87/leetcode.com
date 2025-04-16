// https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/6655971/two-pointers/

function countGood(nums: number[], k: number) {
    const map = new Map<number, number>(), N = nums.length;
    let [res, count, L, R] = [0, 0, -1, -1];
    while (++L < N) {
        while (count < k && R + 1 < N) {
            const right = map.get(nums[++R]) || 0;
            count += right, map.set(nums[R], right + 1);
        }
        if (count >= k) res += N - R;
        const left = (map.get(nums[L]) || 0) - 1;
        count -= left, map.set(nums[L], left);
    }
    return res;
}
