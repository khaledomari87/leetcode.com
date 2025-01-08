// https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/6247610/brute-force-simple-and-readable/

const countPrefixSuffixPairs = (words: string[]) =>
    words.reduce((count, wordi, i) => {
        for (let j = i + 1; j < words.length; j++) {
            count += +(words[j].startsWith(wordi) && words[j].endsWith(wordi));
        }
        return count;
    }, 0);
