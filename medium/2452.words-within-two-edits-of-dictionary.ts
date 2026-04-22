// https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/8060510/brute-force/

const twoEditWords = (queries: string[], dictionary: string[]) =>
    queries.filter((q) =>
        dictionary.some((d) => {
            for (let count = 0, i = 0; i < q.length; i++) {
                count += +(q[i] !== d[i]);
                if (count > 2) return false;
            }
            return true;
        })
    );
