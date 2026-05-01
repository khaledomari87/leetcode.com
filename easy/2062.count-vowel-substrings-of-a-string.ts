// https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/8124658/brute-force/

function countVowelSubstrings(word: string): number {
    let res = 0;
    for (let n = word.length, v = ['a', 'e', 'i', 'o', 'u'], i = 0; i < n; i++) {
        const cnt: number[] = new Array(5).fill(0);
        for (let j = i; j < n && v.includes(word[j]); j++) {
            cnt[v.indexOf(word[j])]++;
            res += +(cnt.every((v) => v > 0));
        }
    }
    return res;
}
