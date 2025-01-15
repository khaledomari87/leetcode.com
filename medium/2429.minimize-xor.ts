// https://leetcode.com/problems/minimize-xor/solutions/6282953/string-bits-manipulation-with-code-comments/

function minimizeXor(num1: number, num2: number): number {
    let ones2 = 0; // number of 1's in num2
    for (const bit of num2.toString(2)) {
        ones2 += +bit;
    }

    const res: string[] = [];
    // Match all available 1'a in ones2 with their corresponding
    // 1's in num1 from left to right, otherwise we push a 0
    for (let i = 0, binary1 = num1.toString(2); i < binary1.length; i++) {
        if (binary1[i] === '1' && ones2 > 0) {
            res.push('1');
            ones2--;
        } else {
            res.push('0');
        }
    }
    // Replace 0's with 1's from right to left in res,
    // restricted by the available 1's in ones2
    for (let i = res.length - 1; i >= 0 && ones2 > 0; i--) {
        if (res[i] === '0') {
            res[i] = '1';
            ones2--;
        }
    }

    // If ones2 has any remanence, push them left of res
    return Number.parseInt('1'.repeat(ones2) + res.join(''), 2);
}
