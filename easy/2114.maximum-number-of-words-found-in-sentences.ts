// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/7134117/optimized-space/

const mostWordsFound = (sentences: string[]) =>
    sentences.reduce((res, s) => {
        let cnt = 1;
        for (const ch of s) cnt += +(ch === ' ');
        return Math.max(res, cnt);
    }, 0);
