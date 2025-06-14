// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/6842728/clean-ts-js/

function sumZero(n: number) {
    const res: number[] = [];
    if (n % 2) res.push(0);
    for (let i = 1, half = n >>> 1; i <= half; i++) {
        res.push(-i, i);
    }
    return res;
}
