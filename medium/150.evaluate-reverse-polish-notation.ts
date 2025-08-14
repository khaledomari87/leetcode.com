// https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/5914610/ts-friendly/

function evalRPN(tokens: string[]) {
    const stack = new Array<number>(), ops = '+-*/';
    for (const t of tokens) {
        if (ops.includes(t)) {
            const [num1, num2] = [stack.pop()!, stack.pop()!];
            if (t === '+') stack.push(num2 + num1);
            else if (t === '-') stack.push(num2 - num1);
            else if (t === '*') stack.push(num2 * num1);
            else stack.push(Math.trunc(num2 / num1));
        } else stack.push(+t);
    }
    return stack[0];
}
