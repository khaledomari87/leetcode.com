// https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6107921/looping-over-spaces-more-efficient/

function addSpaces(s: string, spaces: number[]): string {
    const stack = [s];
    for (let index = 0, previous = 0; index < spaces.length; previous = spaces[index++]) {
        const peek = stack[stack.length - 1];
        stack[stack.length - 1] = peek.substring(0, spaces[index] - previous);
        stack.push(' ', peek.substring(spaces[index] - previous));
    }
    return stack.join('');
}