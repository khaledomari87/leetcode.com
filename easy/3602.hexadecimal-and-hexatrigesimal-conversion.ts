// https://leetcode.com/problems/hexadecimal-and-hexatrigesimal-conversion/solutions/7637377/two-approaches/

const concatHex36 = (n: number) => ((n ** 2).toString(16) + (n ** 3).toString(36)).toUpperCase();

const concatHex36Math = (n: number) =>
    [16, 36].map((h) => {
        const s: (number | string)[] = [];
        for (let i = n ** Math.ceil(h / 15); i;) {
            s.push(i % h < 10 ? i % h : String.fromCharCode(55 + i % h));
            i = Math.floor(i / h);
        }
        return s.reverse().join('');
    }).reduce((a, b) => a + b);
