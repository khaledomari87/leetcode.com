// https://leetcode.com/problems/most-common-word/solutions/6514710/hash-tables/

function mostCommonWord(paragraph: string, banned: string[]) {
    const map = new Map<string, number>();
    const bannedSet = new Set(banned).add('');
    let max = 0;
    paragraph.split(/\W+/).forEach((word) => {
        word = word.toLowerCase();
        if (!bannedSet.has(word)) {
            const count = (map.get(word) || 0) + 1;
            max = Math.max(max, count);
            map.set(word, count);
        }
    });
    for (const item of map) {
        if (item[1] === max) return item[0];
    }
    return '';
}
