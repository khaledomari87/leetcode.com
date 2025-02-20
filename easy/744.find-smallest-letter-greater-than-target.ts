// https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/6447878/binary-search/

function nextGreatestLetter(letters: string[], tar: string) {
    let res = letters[0];
    for (let L = 0, R = letters.length - 1; L <= R && tar <= letters[R];) {
        const mid = (L + R) >>> 1;
        if (letters[mid] > tar) {
            res = letters[mid];
            R = mid - 1;
        } else L = mid + 1;
    }
    return res;
}
