// https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/6195897/dynamic-programming/

function countCompleteDayPairs(hours: number[]): number {
    const cache = new Array(24).fill(0);
    return hours.reduce((count, hour) => {
        count += cache[(24 - (hour % 24)) % 24];
        cache[hour % 24]++;
        return count;
    }, 0);
}

const countCompleteDayPairsBF = (hours: number[]): number =>
    hours.reduce((count, val, i) => {
        for (let j = i + 1; j < hours.length; j++) {
            (val + hours[j]) % 24 === 0 && count++;
        }
        return count;
    }, 0);
