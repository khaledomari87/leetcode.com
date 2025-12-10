// https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/7404327/optimized-solution/

function averageValue(nums: number[]) {
    const sub = nums.filter((n) => n % 6 === 0);
    return !sub.length ? 0 : Math.floor(sub.reduce((a, b) => a + b) / sub.length);
}

function averageValue2(nums: number[]) {
    let cnt = 0, sum = 0;
    for (const num of nums) {
        if (num % 6 === 0) cnt++, sum += num;
    }
    return cnt ? Math.floor(sum / cnt) : 0;
}
