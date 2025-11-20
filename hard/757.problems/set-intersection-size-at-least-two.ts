// https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/7362217/sorting-greedy/

const intersectionSizeTwo = (intervals: [number, number][]) =>
    intervals.sort((a, b) => a[1] - b[1] || b[0] - a[0])
        .reduce(([res, p1, p2], [l, r]) => [
            res + (p2 < l ? 2 : p1 < l ? 1 : 0),
            p2 < l ? r - 1 : p1 < l ? p2 : p1,
            p2 < l || p1 < l ? r : p2,
        ], [0, -1, -1])[0];
