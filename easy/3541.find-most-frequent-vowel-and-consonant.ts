// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/solutions/7185469/counting/

function maxFreqSum(s: string) {
    const map = new Map<string, number>();
    let maxVowel = 0, maxConsonant = 0;
    for (const char of s) {
        const freq = (map.get(char) || 0) + 1;
        map.set(char, freq);
        'aeiou'.includes(char)
            ? maxVowel = Math.max(maxVowel, freq)
            : maxConsonant = Math.max(maxConsonant, freq);
    }
    return maxVowel + maxConsonant;
}
