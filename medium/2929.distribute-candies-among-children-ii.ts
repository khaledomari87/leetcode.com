// https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/6800818/constant-time/

const calc = (x: bigint) => x < 0n ? 0n : (x * (x - 1n)) >> 1n;
const distributeCandies = (N: number, L: number) =>
    Number(
        calc(BigInt(N + 2)) + 3n * calc(BigInt(N - (L + 1) * 2 + 2)) -
            calc(BigInt(N - 3 * (L + 1) + 2)) - 3n * calc(BigInt(N - L + 1)),
    );
