// https://leetcode.com/problems/faulty-keyboard/solutions/6200617/simple-solution-o-n-n/

const finalString = (s: string): string =>
    s.split('').reduce(
        (stack, char) => char !== 'i' && stack.push(char) && stack || stack.reverse(),
        new Array<string>(),
    ).join('');
