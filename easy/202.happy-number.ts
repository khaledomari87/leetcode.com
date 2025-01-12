// https://leetcode.com/problems/happy-number/solutions/6270054/simple-and-efficient/

function isHappy(n: number) {
    const seen = new Set<number>();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        let sum = 0;
        for (let num = n; num > 0; num = Math.floor(num / 10)) {
            sum += (num % 10) ** 2;
        }
        n = sum;
    }
    return n === 1;
}
