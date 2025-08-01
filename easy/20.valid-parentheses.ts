// https://leetcode.com/problems/valid-parentheses/solutions/5913402/simple-and-efficient-using-a-stack/

function isValid(s: string): boolean {
    const map = new Map([[')', '('], [']', '['], ['}', '{']]);
    const stack = new Array<string>();
    for (const char of s) {
        const open = map.get(char);
        if (open === undefined) {
            stack.push(char);
        } else if (open !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}
