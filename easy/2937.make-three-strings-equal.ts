// https://leetcode.com/problems/make-three-strings-equal/solutions/7405310/no-extra-space/

function findMinimumOperations(s1: string, s2: string, s3: string) {
    if (s1[0] !== s2[0] || s1[0] !== s3[0]) return -1;
    let res = s1.length + s2.length + s3.length;
    const end = Math.min(s1.length, s2.length, s3.length);
    for (let i = 0; i < end && s1[i] === s2[i] && s1[i] === s3[i]; res -= 3, i++);
    return res;
}
