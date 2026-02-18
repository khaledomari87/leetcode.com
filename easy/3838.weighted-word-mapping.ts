// https://leetcode.com/problems/weighted-word-mapping/solutions/7587193/two-lines/

// deno-fmt-ignore
const mapWordWeights = (words: string[], weights: number[]) =>
    words.map((w) => String.fromCharCode(122 - w.split('').reduce(
        (r, c) => r + weights[c.charCodeAt(0) - 97], 0) % 26)).join('');
