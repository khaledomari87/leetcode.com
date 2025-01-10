// https://leetcode.com/problems/word-subsets/solutions/6259161/editorial-solution/

function wordSubsets(A: string[], B: string[]) {
    const asciiA = 'a'.charCodeAt(0);
    const count = (word: string) => {
        const counts = new Array<number>(26).fill(0);
        for (const char of word) {
            counts[char.charCodeAt(0) - asciiA]++;
        }
        return counts;
    };

    const bmax = B.reduce((outer, b) =>
        Array.from({ length: 26 }, (_, i) => i).reduce(
            (inner, i) => (inner[i] = Math.max(inner[i], count(b)[i])) && inner || inner,
            outer,
        ), new Array<number>(26).fill(0));

    return A.reduce(
        (res, a) => count(a).every((c, i) => c >= bmax[i]) && res.push(a) && res || res,
        [] as string[],
    );
}
