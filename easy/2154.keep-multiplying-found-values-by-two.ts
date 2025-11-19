// https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/7359248/hash-set/

function findFinalValue(nums: number[], orig: number) {
    for (const s = new Set(nums); s.has(orig); orig *= 2);
    return orig;
}
