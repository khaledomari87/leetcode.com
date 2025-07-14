// https://leetcode.com/problems/check-if-any-element-has-prime-frequency/solutions/6959218/clear-ts-js/

function checkPrimeFrequency(nums: number[]) {
    const counts = nums.reduce(
        (map, num) => map.set(num, (map.get(num) || 0) + 1),
        new Map<number, number>(),
    );
    return Array.from(counts.values()).some((num: number) => {
        if (num < 3) return num === 2;
        if (num % 2 === 0) return false;
        for (let i = 3, sqr = Math.sqrt(num); i <= sqr; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    });
}
