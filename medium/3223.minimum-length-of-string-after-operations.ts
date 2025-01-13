// https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/6272216/optimum-solution/

function minimumLength(s: string): number {
    const codeA = 'a'.charCodeAt(0), counts = new Array<number>(26);
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - codeA] = (counts[s.charCodeAt(i) - codeA] || 0) + 1;
    }
    return counts.reduce((res, c) => c === 0 ? res : res + (c % 2 === 0 ? 2 : 1), 0);
}
