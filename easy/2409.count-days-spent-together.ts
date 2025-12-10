// https://leetcode.com/problems/count-days-spent-together/solutions/7404663/three-lines-with-short-explanation/

function countDaysTogether(arriveA: string, leaveA: string, arriveB: string, leaveB: string) {
    const [a, b] = [[arriveA, leaveA], [arriveB, leaveB]]
        .map((i) => i.map((d) => new Date(`2021-${d}`)));
    const s = new Date(Math.max(a[0].getTime(), b[0].getTime()));
    const e = new Date(Math.min(a[1].getTime(), b[1].getTime()));
    return Math.max(0, (e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24) + 1);
}
