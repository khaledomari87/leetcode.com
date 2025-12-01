// https://leetcode.com/problems/array-prototype-last/solutions/7386140/tsjs/

declare global {
    interface Array<T> {
        last(): T | -1;
    }
}
Array.prototype.last = function () {
    return this.length ? this.at(-1) : -1;
};
