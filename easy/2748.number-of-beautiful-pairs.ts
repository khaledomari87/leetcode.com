// https://leetcode.com/problems/number-of-beautiful-pairs/solutions/7979466/clean-tsjs-on-logm/

function countBeautifulPairs(nums: number[]) {
    const cnt = new Array<number>(10).fill(0);
    for (const num of nums) cnt[+String(num).at(-1)!]++;
    return nums.reduce((res, num) => {
        const str = String(num);
        cnt[+str.at(-1)!]--; // ensure j > i
        for (let j = 1; j < 10; j++) {
            const a = Math.max(+str[0], j), b = Math.min(+str[0], j);
            if (b == 1 || (b != a && (b % 2 || a % 2) && (b % 3 || a % 3))) {
                res += cnt[j];
            }
        }
        return res;
    }, 0);
}
