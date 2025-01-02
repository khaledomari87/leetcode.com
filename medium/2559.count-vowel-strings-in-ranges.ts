// https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/6217674/optimum-linear-solution/

function vowelStrings(words: string[], queries: [number, number][]): number[] {
    const vwl = new Set(['a', 'e', 'i', 'o', 'u']);
    const prfx = new Array<number>(words.length + 1);
    prfx[0] = 0;

    words.forEach((w, i) => prfx[i + 1] = prfx[i] + +(vwl.has(w[0]) && vwl.has(w[w.length - 1])));

    const res = new Array<number>(queries.length);
    queries.forEach(([li, ri], i) => res[i] = prfx[ri + 1] - prfx[li]);
    return res;
}
