// https://leetcode.com/problems/sorting-the-sentence/solutions/7444047/clean/

// deno-fmt-ignore
const sortSentence = (s: string) => s
    .split(' ')
    .sort((a, b) => +a.at(-1)! - +b.at(-1)!)
    .map((v) => v.slice(0, -1))
    .join(' ');
