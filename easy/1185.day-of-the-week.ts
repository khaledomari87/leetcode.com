// https://leetcode.com/problems/day-of-the-week/solutions/6818001/clean-ts-js/

const dayOfTheWeek = (day: number, month: number, year: number) =>
    [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ][new Date(year, month - 1, day).getDay()];
