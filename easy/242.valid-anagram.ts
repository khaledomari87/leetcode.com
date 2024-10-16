// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {
    const map = new Map<string, number>();
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (const char of t) {
        const count = map.get(char);
        if (count === undefined) {
            return false;
        } if(count === 1) {
            map.delete(char);
        } else {
            map.set(char, count - 1);
        }
    }
    return map.size === 0;
};
