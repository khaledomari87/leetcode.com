// https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/7444068/clean/

// deno-fmt-ignore
const minimumCost = (cost: number[]) => cost.sort((a, b) => b - a)
    .reduce((res, cost, i) => res + cost * +!(i % 3 >> 1), 0);
// .reduce((res, cost, i) => res + cost * +(i % 3 < 2), 0);
