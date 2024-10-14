// https://leetcode.com/problems/merge-strings-alternately/

function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  const maxLength = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLength; i++) {
      result += (word1[i] ?? '') + (word2[i] ?? '');
  }
  return result;
};