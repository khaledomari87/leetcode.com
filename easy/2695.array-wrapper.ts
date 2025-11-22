// https://leetcode.com/problems/array-wrapper/solutions/7367244/clean/

class ArrayWrapper {
    constructor(private nums: number[]) {}
    valueOf = () => this.nums.reduce((s, v) => s + v, 0);
    toString = () => `[${this.nums.join(',')}]`;
}
