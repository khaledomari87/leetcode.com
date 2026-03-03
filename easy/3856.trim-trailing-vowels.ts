// https://leetcode.com/problems/trim-trailing-vowels/solutions/7623063/clean/

function trimTrailingVowels(s: string) {
    let i = s.length - 1;
    for (const v = 'aeiou'; i >= 0 && v.includes(s[i]); i--);
    return s.substring(0, i + 1);
}
