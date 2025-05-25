// https://leetcode.com/problems/find-common-characters/solutions/6780481/counting/

function commonChars(words: string[]) {
    const m = words.length, a = 'a'.charCodeAt(0);
    const counts: number[][] = words.reduce((arr, word, i) => {
        for (let j = 0, n = word.length; j < n; j++) {
            arr[i][word.charCodeAt(j) - a]++;
        }
        return arr;
    }, Array.from({ length: m }, () => new Array(26).fill(0)));
    const res: string[] = [];
    for (let i = 0; i < 26; i++) {
        let min = counts.reduce((a, b) => Math.min(a, b[i]), Infinity);
        const char = String.fromCharCode(a + i);
        while (min--) res.push(char);
    }
    return res;
}
