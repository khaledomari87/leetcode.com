// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/7381236/without-sorting/

function isCovered(ranges: [number, number][], left: number, right: number) {
    for (; left <= right; left++) {
        if (ranges.every(([l, r]) => left < l || left > r)) {
            return false;
        }
    }
    return true;
}
