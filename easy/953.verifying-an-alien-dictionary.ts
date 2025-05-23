// https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/6772956/clean-solution/

function isAlienSorted(words: string[], order: string) {
    for (let m = words.length, i = 1; i < m; i++) {
        for (let n = Math.min(words[i - 1].length, words[i].length), j = 0; j < n; j++) {
            const prev = order.indexOf(words[i - 1][j]), curr = order.indexOf(words[i][j]);
            if (prev < curr) break;
            if (prev > curr || j === n - 1 && words[i - 1].length > words[i].length) return false;
        }
    }
    return true;
}
