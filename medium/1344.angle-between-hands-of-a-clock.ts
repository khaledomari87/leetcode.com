// https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/8341715/two-lines/

function angleClock(hour: number, minutes: number) {
    const diff = Math.abs(((hour % 12) + minutes / 60) / 12 - minutes / 60) * 360;
    return Math.min(diff, 360 - diff);
}

function angleClock2(hour: number, minutes: number) {
    const diff = Math.abs((hour % 12) / 12 - (11 * minutes) / 720);
    return Math.min(diff, 1 - diff) * 360;
}
