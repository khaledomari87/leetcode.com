// https://leetcode.com/problems/find-the-highest-altitude/solutions/7314391/one-line-ts/

// deno-fmt-ignore
const largestAltitude = (gain: number[]) => gain.reduce(
    ([p, r], h) => [p += h, Math.max(r, p)], [0, 0])[1];
