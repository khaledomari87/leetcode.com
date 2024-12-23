// https://leetcode.com/problems/button-with-longest-push-time/solutions/6179027/simple-efficient-and-readable/

const buttonWithLongestTime = (events: [number, number][]): number =>
    events.reduce((max, event, i) => {
        const time = event[1] - events[i - 1][1];
        if (time > max[1] || (time === max[1] && event[0] < max[0])) return [event[0], time];
        return max;
    })[0];
