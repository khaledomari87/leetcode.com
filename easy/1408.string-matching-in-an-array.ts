// https://leetcode.com/problems/string-matching-in-an-array/solutions/6243553/brute-force/

import TrieNode from '../assets/TrieNode.ts';

const stringMatching = (words: string[]) => {
    const res: string[] = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[i])) {
                res.push(words[i]);
                break;
            }
        }
    }
    return res;
};
