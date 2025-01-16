// https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/6290103/log-32-solution/

function toHex(num: number): string {
    if (num < 0) num += 16 ** 8;
    const codeA = 'a'.charCodeAt(0), code0 = '0'.charCodeAt(0);
    const res: string[] = [];
    do {
        const hex = num % 16;
        res.push(String.fromCharCode((hex > 9 && codeA - 10 || code0) + hex));
        num >>>= 4; // divide by 16
    } while (num > 0);
    return res.reverse().join('');
}
