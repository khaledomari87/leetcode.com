// https://leetcode.com/problems/range-sum-query-immutable/solutions/6275202/prefix-sum/

class NumArray {
    private prefixSum: number[];
    constructor(nums: number[]) {
        this.prefixSum = new Array<number>(nums.length);
        this.prefixSum[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefixSum[right] - (left >= 0 && this.prefixSum[left - 1] || 0);
    }
}
