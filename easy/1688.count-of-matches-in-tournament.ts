// https://leetcode.com/problems/count-of-matches-in-tournament/solutions/7330132/two-approaches/

function numberOfMatches(n: number) {
    let res = 0;
    for (const floor = Math.floor; n > 1;) {
        const half = floor(n / 2);
        res += half, n = half + n % 2;
    }
    return res;
}

const numberOfMatchesLogic = (n: number) => n - 1;
