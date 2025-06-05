// https://leetcode.com/problems/prime-arrangements/solutions/6815201/clean-ts-js/

function numPrimeArrangements(n: number) {
    const prime = (num: number) => {
        for (let i = 2, sq = Math.sqrt(num); i <= sq; i++) {
            if (!(num % i)) return false;
        }
        return num > 1;
    };
    let res = 1;
    for (let j = 1, k = 1, MOD = 1e9 + 7; n > 0; n--) {
        res = res * (prime(n) ? j++ : k++) % MOD;
    }
    return res;
}
