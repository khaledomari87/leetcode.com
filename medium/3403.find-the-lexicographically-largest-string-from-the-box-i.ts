// https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/solutions/6809100/enumerations/

function answerString(word: string, friends: number) {
    if (friends === 1) return word;
    let res = '';
    for (let i = 0, n = word.length, m = n - friends + 1; i < n; i++) {
        const part = word.substring(i, i + m);
        if (part > res) res = part;
    }
    return res;
}
