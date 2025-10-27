// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/7306112/stack/

function minLength(s: string) {
    const stack: string[] = [];
    for (const c of s) {
        stack.push(c);
        if (['AB', 'CD'].includes(stack.slice(-2).join(''))) {
            stack.splice(-2, 2);
        }
    }
    return stack.length;
}
