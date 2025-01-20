// https://leetcode.com/problems/keyboard-row/solutions/6308400/linear-solution/

function findWords(words: string[]) {
    const row1 = new Set('qwertyuiop'), row2 = new Set('asdfghjkl'), row3 = new Set('zxcvbnm');
    return words.reduce((res, word) => {
        const lower = word.toLowerCase();
        const row = row1.has(lower[0]) ? row1 : row2.has(lower[0]) ? row2 : row3;
        let i = 1;
        while (i < lower.length && row.has(lower[i])) i++;
        return i === lower.length && res.push(word) && res || res;
    }, new Array<string>());
}
