const vowelStrings = (words: string[], l: number, r: number, vowels = 'aeiou') =>
    words.slice(l, r + 1).reduce((r, w) => r + +[w[0], w.at(-1)!].every((c) => vowels.includes(c)), 0);
