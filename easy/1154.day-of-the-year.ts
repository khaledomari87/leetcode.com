// https://leetcode.com/problems/day-of-the-year/solutions/6813836/clean-ts-js/

function dayOfYear(date: string) {
    const t = new Date(date), jan1 = new Date(t.getFullYear(), 0);
    return (t.getTime() - jan1.getTime()) / (1000 * 60 * 60 * 24) + 1;
}
