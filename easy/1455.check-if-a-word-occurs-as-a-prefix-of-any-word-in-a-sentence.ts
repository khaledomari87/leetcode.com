// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6950851/clean-ts-js/

// deno-fmt-ignore
function isPrefixOfWord(sentence: string, searchWord: string) {
    const find = sentence.split(' ')               // word[]
        .map((w, i) => [w, i] as [string, number]) // [word, index][]
        .find((v) => v[0].startsWith(searchWord)); // [word, index] | undefined
    return 1 + (find?.[1] ?? -2);
}
