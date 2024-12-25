// https://leetcode.com/problems/clear-digits/solutions/6186966/optimum-solution/

function clearDigits(s: string): string {
    const output: string[] = [];
    for (let i = s.length - 1, count = 0; i >= 0; i--) {
        isNaN(parseInt(s[i])) ? count > 0 && count-- || output.push(s[i]) : count++;
    }
    // return output.reduce((str, char) => char + str, '');
    return output.reverse().join('');
}
