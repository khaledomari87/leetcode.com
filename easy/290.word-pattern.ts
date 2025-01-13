// https://leetcode.com/problems/word-pattern/solutions/6274933/double-maps/

function wordPattern(pattern: string, s: string) {
    const words = s.split(' ');
    if (words.length !== pattern.length) return false;
    for (
        let i = 0, map1 = new Map<string, string>(), map2 = new Map<string, string>();
        i < pattern.length;
        i++
    ) {
        let item = map1.get(pattern[i]);
        if (item && item !== words[i]) return false;
        if ((item = map2.get(words[i])) && item !== pattern[i]) return false;

        map1.set(pattern[i], words[i]);
        map2.set(words[i], pattern[i]);
    }
    return true;
}
