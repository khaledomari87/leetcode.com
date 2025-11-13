// https://leetcode.com/problems/maximum-repeating-substring/solutions/7346796/regexp/

function maxRepeating(sequence: string, word: string) {
    const max = Math.max, reverse = (s: string) => s.split('').reverse().join('');
    return [[sequence, word], [reverse(sequence), reverse(word)]]
        .reduce((prev, [s, w]) => {
            const matches = s.match(new RegExp(`(${w})+`, 'g')) || [];
            return max(prev, matches.reduce((res, b) => max(res, b.length), 0) / word.length);
        }, 0);
}
