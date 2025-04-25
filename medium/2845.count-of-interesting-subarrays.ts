// https://leetcode.com/problems/count-of-interesting-subarrays/solutions/6685720/prefix-sum/

function countInterestingSubarrays(nums: number[], mod: number, k: number) {
    let res = 0;
    for (let i = 0, pre = 0, map = new Map([[0, 1]]); i < nums.length; i++) {
        pre += +(nums[i] % mod === k);
        res += map.get((pre - k + mod) % mod) || 0;
        map.set(pre % mod, (map.get(pre % mod) || 0) + 1);
    }
    return res;
}
