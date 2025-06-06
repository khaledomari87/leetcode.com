// https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/6815501/clean-ts-js/

function robotWithString(s: string) {
    const res: string[] = [], stack: string[] = [];
    const a = 'a'.charCodeAt(0), freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) freq[s.charCodeAt(i) - a]++;

    for (let i = 0, low = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - a]--;
        while (low < 26 && freq[low] === 0) low++;
        stack.push(s[i]);
        while (stack.length && stack.at(-1)!.charCodeAt(0) - a <= low) {
            res.push(stack.pop()!);
        }
    }
    return res.join('');
}
