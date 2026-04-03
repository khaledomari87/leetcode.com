// https://leetcode.com/problems/calculator-with-method-chaining/solutions/7760446/tsjs/

class Calculator {
    constructor(private value: number) {}
    getResult = () => this.value;
    add = (value: number) => (this.value += value, this);
    subtract = (value: number) => (this.value -= value, this);
    multiply = (value: number) => (this.value *= value, this);
    power = (value: number) => (this.value **= value, this);
    divide(value: number) {
        if (!value) throw Error('Division by zero is not allowed');
        return (this.value /= value, this);
    }
}
