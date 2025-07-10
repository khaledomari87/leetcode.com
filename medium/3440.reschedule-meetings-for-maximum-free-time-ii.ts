// https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii/solutions/6942023/max-prefix-suffix/

function maxFreeTime(eventTime: number, starts: number[], ends: number[]) {
    const n = starts.length, suffix = new Array<number>(n);
    suffix[n - 1] = eventTime - ends.at(-1)!;
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = Math.max(starts[i + 1] - ends[i], suffix[i + 1]);
    }

    const prefix = new Array<number>(n);
    prefix[0] = starts[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = Math.max(starts[i] - ends[i - 1], prefix[i - 1]);
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        const prevEnd = i ? ends[i - 1] : 0;
        const nextStart = i < n - 1 ? starts[i + 1] : eventTime;
        let curr = ends[i] - starts[i];
        if (suffix[i + 1] >= curr || i && prefix[i - 1] >= curr) {
            curr = 0;
        }
        res = Math.max(res, nextStart - prevEnd - curr);
    }
    return res;
}
