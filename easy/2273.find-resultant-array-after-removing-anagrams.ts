// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/7271014/clean-solution-using-sorting/

function removeAnagrams(words: string[]) {
    const sort = (w: string) => w.split('').sort().join('');
    const res = [words[0]], n = words.length;
    for (let i = 1, prev = sort(words[0]); i < n; i++) {
        const curr = sort(words[i]);
        if (curr !== prev) res.push(words[i]), prev = curr;
    }
    return res;
}
