// https://leetcode.com/problems/add-strings/solutions/6291010/simple-and-efficient/

function addStrings(num1: string, num2: string) {
    const len = Math.max(num1.length, num2.length);
    const res: number[] = [];
    let carry = 0;
    for (let i = 0; i < len; i++) {
        const n1 = i < num1.length && +num1[num1.length - i - 1] || 0;
        const n2 = i < num2.length && +num2[num2.length - i - 1] || 0;
        const sum = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        res.push(sum % 10);
    }
    carry && res.push(carry);
    return res.reverse().join('');
}

console.log(addStrings('123', '11'));
