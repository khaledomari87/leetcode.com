// https://leetcode.com/problems/min-stack/solutions/5913209/simple-and-readable/

class MinStack {
    constructor(private stack: number[], private minStack: number[]) {
        this.stack = [];
        this.minStack = [];
    }
    push(val: number) {
        this.stack.push(val);
        const lastIndex = this.minStack.length - 1;
        if (lastIndex < 0 || val <= this.minStack[lastIndex]) {
            this.minStack.push(val);
        }
    }
    pop() {
        if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
