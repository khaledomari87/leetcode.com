// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<typeof strs[0], typeof strs>();
    for (const str of strs) {
        const sorted = str.split('').sort().join(''); // strs[i] <= 100, so the sort is fast
        const item = map.get(sorted);
        if (item) {
            item.push(str);
        } else {
            map.set(sorted, [str]);
        }
    }
    return Array.from(map.values());
};
