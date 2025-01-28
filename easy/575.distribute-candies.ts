// https://leetcode.com/problems/distribute-candies/solutions/6338747/hash-set/

const distributeCandies = (candyType: number[]) => {
    const set = new Set<number>();
    const max = candyType.length / 2;
    for (const type of candyType) {
        if (set.add(type).size >= max) return max;
    }
    return Math.min(max, set.size);
};
