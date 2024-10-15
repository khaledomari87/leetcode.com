// https://leetcode.com/problems/evaluate-reverse-polish-notation/

function evalRPN(tokens: string[]): number {
    const stack = new Array<number>();
    for (const t of tokens) {
        if (!['+', '-', '*', '/'].includes(t)) {
            stack.push(+t);
        } else {
            const num1 = stack.pop();
            const num2 = stack.pop();
            if (num1 === undefined || num2 === undefined) {
                throw new Error('Invalid Argument');
            }
            if (t === '+') {
                stack.push(num2 + num1);
            } else if (t === '-') {
                stack.push(num2 - num1);
            } else if (t === '*') {
                stack.push(num2 * num1);
            } else if (t === '/') {
                stack.push(Math.trunc(num2 / num1)); // trunc not floor to handle negative results
            }
        }
    }
    return stack[0];
};
