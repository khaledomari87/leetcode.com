// https://leetcode.com/problems/distance-between-bus-stops/solutions/6817981/clean-ts-js/

const distanceBetweenBusStops = (dist: number[], start: number, end: number) =>
    Math.min(...[[start, end], [end, start]].map(([a, b]) => {
        let i = a, res = 0;
        while (i !== b) {
            res += dist[i];
            i = (i + 1) % dist.length;
        }
        return res;
    }));
