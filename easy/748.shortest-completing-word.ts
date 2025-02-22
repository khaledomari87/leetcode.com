// https://leetcode.com/problems/shortest-completing-word/solutions/6454316/counting-maps/

function shortestCompletingWord(licensePlate: string, words: string[]) {
    const aCode = 'a'.charCodeAt(0);
    const letters: number[] = new Array(26).fill(0);
    for (let c of licensePlate) {
        (c = c.toLowerCase()) >= 'a' && c <= 'z' && letters[c.charCodeAt(0) - aCode]++;
    }
    return words.reduce((res, w) => {
        const cnts: typeof letters = new Array(26).fill(0);
        for (const char of w) cnts[char.charCodeAt(0) - aCode]++;
        cnts.every((count, i) => count >= letters[i]) && (w.length < res.length) && (res = w);
        return res;
    }, 'Invalid Input!!!' /* 1 <= words[i].length <= 15 */);
}
