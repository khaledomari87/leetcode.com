// https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/7360900/counters/

function countWords(words1: string[], words2: string[]) {
    const [m1, m2] = [words1, words2].map((arr) =>
        arr.reduce(
            (m, w) => m.set(w, (m.get(w)! || 0) + 1),
            new Map<string, number>(),
        )
    );
    return words1.reduce((r, w) => r + +(m1.get(w)! === 1 && (m2.get(w) || 0) === 1), 0);
}
