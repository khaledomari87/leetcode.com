// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/7397491/two-pointers/

const checkZeroOnes = (s: string) =>
    [1, 0].reduce((cnts, v, i) => {
        for (let l = 0, r = l; r < s.length; r++) {
            if (+s[r] !== v) l = r + 1;
            cnts[i] = Math.max(cnts[i], r - l + 1);
        }
        return cnts;
    }, [0, 0]).reduce((a, b) => a - b) > 0;
