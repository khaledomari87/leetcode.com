// https://leetcode.com/problems/construct-k-palindrome-strings/solutions/6265819/linear-solution-odd-occurrences-k/

function canConstruct(s: string, k: number): boolean {
    if (s.length < k) return false;
    if (s.length === k) return true;

    const asciiA = 'a'.charCodeAt(0);
    const counts = new Array<number>(26);
    for (const char of s) {
        const code = char.charCodeAt(0) - asciiA;
        counts[code] = (counts[code] || 0) + 1;
    }
    return counts.reduce((k, count) => k - +(count % 2 === 1), k) >= 0;
}
