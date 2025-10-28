// https://leetcode.com/problems/goal-parser-interpretation/solutions/7308406/one-line/

const interpret = (command: string) =>
    command.replace(/\(\)|\(al\)/g, (match) => match === '()' ? 'o' : 'al');

function interpret2(command: string) {
    const res: string[] = [];
    for (let i = 0, n = command.length; i < n;) {
        if (command[i] === 'G') res.push('G'), i++;
        else if (command.substring(i, i + 2) === '()') {
            res.push('o'), i += 2;
        } else res.push('al'), i += 4;
    }
    return res.join('');
}
