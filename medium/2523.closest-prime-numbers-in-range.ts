// https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/6508395/distance-between-twin-primes/

function closestPrimes(left: number, right: number) {
    let iLeft = -1, resL = -1, resR = -1;
    let diff = Number.POSITIVE_INFINITY;
    for (let iRight = left; iRight <= right; iRight++) {
        if (isPrime(iRight)) {
            if (iLeft !== -1) {
                const newDiff = iRight - iLeft;
                if (newDiff < diff) [diff, resL, resR] = [newDiff, iLeft, iRight];
                if ([1, 2].includes(newDiff)) return [iLeft, iRight];
            }
            iLeft = iRight;
        }
    }
    return [resL, resL === -1 ? -1 : resR];
}

function isPrime(num: number) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let divisor = 3; divisor * divisor <= num; divisor += 2) {
        if (num % divisor === 0) return false;
    }
    return true;
}
