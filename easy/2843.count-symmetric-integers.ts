// https://leetcode.com/problems/count-symmetric-integers/solutions/6639124/string-and-math-approaches/

function countSymmetricIntegers(low: number, high: number) {
    let res = 0;
    while (low <= high) {
        const s = (low++).toString(), mid = s.length / 2;
        res += +(
            Number.isInteger(mid) &&
            s.slice(0, mid).split('').reduce((a, b) => +a + +b, 0) ===
                s.slice(mid).split('').reduce((a, b) => +a + +b, 0)
        );
    }
    return res;
}

function countSymmetricIntegersMath(L: number, H: number) {
    let res = 0;
    while (L <= H) {
        res += +(L < 100 && L % 11 === 0 ||
            L >= 1000 && L < 10000 &&
                Math.floor(L / 1000) + Math.floor((L % 1000) / 100) ===
                    Math.floor((L % 100) / 10) + (L % 10)), L++;
    }
    return res;
}
