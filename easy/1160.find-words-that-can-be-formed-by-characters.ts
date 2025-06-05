// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/6812591/counting-using-arrays/

function countCharacters(words: string[], chars: string) {
    const a = 'a'.charCodeAt(0);
    const check = (word: string) => {
        const tmp = [...counts];
        for (let i = 0; i < word.length; i++) {
            if (--tmp[word.charCodeAt(i) - a] < 0) return 0;
        }
        return word.length;
    };
    const counts = new Array<number>(26).fill(0);
    for (let i = 0; i < chars.length; i++) {
        counts[chars.charCodeAt(i) - a]++;
    }
    return words.reduce((res, word) => res + check(word), 0);
}
