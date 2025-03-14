// https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/6535026/binary-search/

function maximumCandies(candies: number[], k: number) {
    const total = candies.reduce((prev, curr) => prev + curr);
    if (total < 2 * k) return +(total >= k);

    const validate = (size: number) => {
        for (let i = 0, sum = 0; i < candies.length; i++) {
            if ((sum += Math.floor(candies[i] / size)) >= k) return true;
        }
        return false;
    };
    let l = 1, r = Math.floor(total / k) + 1;
    while (l < r) {
        const mid = l + r >>> 1;
        validate(mid) ? l = mid + 1 : r = mid;
    }
    return l - 1; // or r - 1, since l = r
}
