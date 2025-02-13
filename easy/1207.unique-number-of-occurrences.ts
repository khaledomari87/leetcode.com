// https://leetcode.com/problems/unique-number-of-occurrences/solutions/6144872/on-solution-using-double-hash-tables-by-y6wy9/

function uniqueOccurrences(arr: number[]): boolean {
    const map = arr.reduce((map, num) => map.set(num, (map.get(num) || 0) + 1), new Map<number, number>());
    const set = new Set<number>();
    for (const count of map.values()) {
        if (set.has(count)) return false;
        set.add(count);
    }
    return true;
}
