// https://leetcode.com/problems/xor-operation-in-an-array/solutions/6954957/simple-simulation/

function xorOperation(n: number, start: number) {
    let res = 0;
    while (n--) res ^= start + 2 * n;
    return res;
}
