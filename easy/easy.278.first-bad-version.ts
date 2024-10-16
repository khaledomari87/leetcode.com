// https://leetcode.com/problems/first-bad-version/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// deno-lint-ignore no-var
var solution = function (isBadVersion: (version: number) => boolean) {
    return function (right: number): number {
        let left = 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            isBadVersion(mid) ? right = mid : left = mid + 1;
        }
        return left; // Or return right;
    };
};
