// https://leetcode.com/problems/sort-vowels-in-a-string/solutions/7178118/sorting/

function sortVowels(s: string) {
    const origVowels: string[] = [], origIndices: number[] = [];
    const res: string[] = s.split(''), vowels = 'aeiouAEIOU';
    res.forEach((char, i) =>
        vowels.includes(char) &&
        (origVowels.push(char), origIndices.push(i))
    );
    origVowels.sort();
    while (origIndices.length) res[origIndices.pop()!] = origVowels.pop()!;
    return res.join('');
}
