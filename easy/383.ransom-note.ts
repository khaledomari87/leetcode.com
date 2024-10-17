// https://leetcode.com/problems/ransom-note/

function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map<string, number>();
    for (const char of magazine) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        const count = map.get(char);
        if (!count) { // if count is undefined or 0
            return false;
        }
        map.set(char, count - 1);
    }

    return true;
}
