// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/6949110/two-lines-optimal-solution/

function kidsWithCandies(candies: number[], extraCandies: number) {
    const max = candies.reduce((a, b) => Math.max(a, b));
    return candies.map((num) => num + extraCandies >= max);
}
