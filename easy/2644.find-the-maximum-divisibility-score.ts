// https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/7409486/brute-force/

function maxDivScore(nums: number[], divisors: number[]) {
    let res = Infinity, cnt = -1;
    for (const d of divisors) {
        const c = nums.reduce((r, n) => r + +!(n % d), 0);
        if (c > cnt || c === cnt && d < res) {
            cnt = c, res = d;
        }
    }
    return res;
}
