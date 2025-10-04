// https://leetcode.com/problems/decode-xored-array/solutions/7248149/simplest/

function decode(encoded: number[], first: number) {
    const res = [first];
    for (const num of encoded) {
        res.push(num ^ res.at(-1)!);
    }
    return res;
}
