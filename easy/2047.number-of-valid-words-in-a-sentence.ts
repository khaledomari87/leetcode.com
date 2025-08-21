// https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/7106821/reg-expression/

// deno-fmt-ignore
const countValidWords = (sentence: string) => sentence.split(' ').filter(
    (word) => word.search(/^(?:[a-z]+(?:-[a-z]+)?[.,!]?|[.,!])$/) >= 0).length;
