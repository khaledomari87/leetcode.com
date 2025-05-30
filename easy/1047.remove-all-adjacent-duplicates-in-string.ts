// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/6796666/stack/

function removeDuplicates(s: string) {
    const stack: string[] = [];
    for (const char of s) {
        stack.at(-1) === char ? stack.pop() : stack.push(char);
    }
    return stack.join('');
}
