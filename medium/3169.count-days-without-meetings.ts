// https://leetcode.com/problems/count-days-without-meetings/solutions/6572859/two-linear-solutions/

function countDays(days: number, meetings: [number, number][]) {
    let prevEnd = 0;
    return meetings.sort((a, b) => a[0] - b[0]).reduce((res, [start, end]) => {
        if (start > prevEnd + 1) res += start - prevEnd - 1;
        prevEnd = Math.max(prevEnd, end);
        return res;
    }, days) - prevEnd;
}

function countDaysMerge(days: number, meetings: [number, number][]) {
    meetings.sort((a, b) => a[0] - b[0]);
    const merged: typeof meetings = [meetings[0]];
    for (let i = 1; i < meetings.length; i++) {
        const last = merged.at(-1)!;
        if (last[1] >= meetings[i][0]) {
            last[1] = Math.max(last[1], meetings[i][1]);
        } else merged.push(meetings[i]);
    }
    return days - merged.reduce((res, [start, end]) => res + end - start + 1, 0);
}
