// https://leetcode.com/problems/add-binary/solutions/6238274/two-ways-big-integers-and-binary-addition/

const addBinary = (a: string, b: string) => (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);

const addBinary2 = (a: string, b: string) => {
    const res = new Array<string>(Math.max(a.length, b.length) + 1);
    let indexOf1 = -1;
    for (let i = 0, carry = 0; i < res.length; i++) {
        const sum = Number(a[a.length - i - 1] || 0) + Number(b[b.length - i - 1] || 0) + carry;
        carry = Math.floor(sum / 2);
        (res[res.length - i - 1] = String(sum % 2)) === '1' && (indexOf1 = res.length - i - 1);
    }
    return indexOf1 >= 0 && res.join('').substring(indexOf1) || '0';
};
