// https://leetcode.com/problems/count-asterisks/solutions/7409451/functional-programming/

const countAsterisks = (s: string) =>
    s.split('|').reduce((res, part, i) => {
        if (i % 2 === 0) {
            res += part.split('').reduce((t, c) => t + +(c === '*'), 0);
        }
        return res;
    }, 0);
