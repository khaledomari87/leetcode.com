// https://leetcode.com/problems/baseball-game/

function calPoints(operations: string[]): number {
    const stack = new Array<string | number>();
    for (const op of operations) {
        if (op === '+') {
            stack.push((stack[stack.length - 1] as number) + (stack[stack.length - 2] as number));
        } else if (op === 'D') {
            stack.push(2 * (stack[stack.length - 1] as number));
        } else if (op === 'C') {
            stack.pop();
        } else {
            stack.push(+op);
        }
    }
    return stack.reduce((prev, curr) => (prev as number) + (curr as number), 0) as number;
};
