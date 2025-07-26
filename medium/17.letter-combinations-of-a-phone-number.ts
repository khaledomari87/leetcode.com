// https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/6006074/most-efficient-solution/

function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    const map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);
    const output: string[] = [], track: string[] = [], n = digits.length;
    const rbt = (i: number) => {
        if (i === n) {
            output.push(track.join(''));
            return;
        }
        for (const char of map.get(digits[i])!) {
            track.push(char);
            rbt(i + 1);
            track.pop();
        }
    };
    rbt(0);
    return output;
}
