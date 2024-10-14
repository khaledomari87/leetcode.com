// https://leetcode.com/problems/min-stack/

class MinStack {
    constructor(private stack: number[], private minStack: number[]) {
        this.stack = [];
        this.minStack = [];
    }
    push(val: number): void {
        this.stack.push(val);
        const lastIndex = this.minStack.length - 1;
        this.minStack.push(lastIndex < 0 ? val : Math.min(val, this.minStack[lastIndex]));
    }
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }
    top(): number {
        return this.stack[this.stack.length - 1];
    }
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
