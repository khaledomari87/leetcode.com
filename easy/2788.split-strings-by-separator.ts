// https://leetcode.com/problems/split-strings-by-separator/solutions/7402624/one-line/

const splitWordsBySeparator = (words: string[], separator: string) =>
    words.map((sentence) => sentence.split(separator))
        .reduce((a, b) => a.concat(b))
        .filter(Boolean);
