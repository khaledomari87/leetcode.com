// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/7258002/sort-then-binary-search/

function successfulPairs(spells: number[], potions: number[], success: number) {
    const p = potions.sort((a, b) => b - a).length;
    return spells.map((num) => {
        let l = 0, r = p - 1;
        while (l <= r) {
            const mid = (r + l) >> 1;
            const mult = num * potions[mid];
            mult < success ? r = mid - 1 : l = mid + 1;
        }
        return l; // or return r + 1
    });
}
