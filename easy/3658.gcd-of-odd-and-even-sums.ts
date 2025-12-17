// https://leetcode.com/problems/gcd-of-odd-and-even-sums/solutions/7420002/two-approaches-ologn-o1/

function gcdOfOddEvenSums(n: number) {
    const total = 2 * n * n + n; // odd + even
    let odd = total / 2 - n / 2;
    let even = total / 2 + n / 2;
    while (odd) { // Finding GCD
        [even, odd] = [odd, even % odd];
    }
    return even;
}

const gcdOfOddEvenSumsOneLine = (n: number) => n;
