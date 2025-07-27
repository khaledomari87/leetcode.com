// https://leetcode.com/problems/water-bottles/solutions/7013288/log-n/

function numWaterBottles(bottles: number, exchange: number) {
    let res = bottles, empty = bottles;
    while (empty >= exchange) {
        const k = Math.floor(empty / exchange);
        res += k;
        empty += k - k * exchange;
    }
    return res;
}
