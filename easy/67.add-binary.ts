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

function addBinary3(a: string, b: string) {
    const res: number[] = [];
    let carry = 0;
    for (let n = Math.max(a.length, b.length) + 1, i = -1; i > -n; i--) {
        const d = +(a.at(i) || 0) + +(b.at(i) || 0) + carry;
        carry = +(d > 1);
        res.push(d % 2);
    }
    if (carry) res.push(carry);
    return res.reverse().join('');
}
