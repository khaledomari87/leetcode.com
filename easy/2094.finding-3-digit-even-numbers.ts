// https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/6736364/brute-force/

function findEvenNumbers(digits: number[]) {
    const count: number[] = digits.reduce((a, n) => (a[n]++, a), Array(10).fill(0));
    const res: number[] = [], floor = Math.floor;
    for (let n = 100; n <= 998; n += 2) {
        const cand = [floor(n / 100), floor((n % 100) / 10), n % 10];
        cand.forEach((i) => count[i]--);
        if (count[cand[0]] > -1 && count[cand[1]] > -1 && count[cand[2]] > -1) res.push(n);
        cand.forEach((i) => count[i]++);
    }
    return res;
}
