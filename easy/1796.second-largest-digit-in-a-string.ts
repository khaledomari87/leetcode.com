// https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/7395659/clean-without-sorting/

function secondHighest(s: string) {
    const digits = s.split('').reduce(
        (a, c) => (!isNaN(+c) && (a[+c] = +c), a),
        new Array<number>(10),
    ).filter(isFinite);
    return digits.length > 1 ? digits.at(-2)! : -1;
}
