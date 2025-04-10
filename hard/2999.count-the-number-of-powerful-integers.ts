// https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/6635350/combinatorial-mathematics/

function numberOfPowerfulInt(S: number, F: number, limit: number, s: string) {
    const calc = (x: string) => {
        if (x.length <= s.length) return +(x.length === s.length && x >= s);
        let count = 0;
        const suffix = x.slice(-s.length);
        for (let i = 0, len = x.length - s.length; i < len; i++) {
            if (limit < +x[i]) return count + (limit + 1) ** (len - i);
            count += +x[i] * Math.pow(limit + 1, len - 1 - i);
        }
        return count + +(suffix >= s);
    };
    return calc(F.toString()) - calc((S - 1).toString());
}
