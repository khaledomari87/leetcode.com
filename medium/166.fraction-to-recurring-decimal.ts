// https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/7220648/math-solution/

function fractionToDecimal(numerator: number, denominator: number) {
    const sign = numerator * denominator < 0 ? '-' : '';
    [numerator, denominator] = [Math.abs(numerator), Math.abs(denominator)];
    const int = Math.floor(numerator / denominator);
    const map = new Map<number, number>(), res: number[] = [];
    let remain = numerator % denominator;
    while (remain > 0 && !map.has(remain)) {
        map.set(remain, map.size);
        remain *= 10;
        res.push(Math.floor(remain / denominator));
        remain = remain % denominator;
    }
    const i = map.get(remain);
    return sign + int + (res.length || i !== undefined ? '.' : '') + (
        i === undefined
            ? res.length ? res.join('') : ''
            : res.slice(0, i).join('') + '(' + res.slice(i).join('') + ')'
    );
}
