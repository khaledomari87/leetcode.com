// https://leetcode.com/problems/count-and-say/solutions/6662999/iterative-approach/

function countAndSay(n: number) {
    let res = '1';
    for (let i = 2; i <= n; i++) {
        let current = '', count = 1;
        for (let j = 1; j < res.length; j++) {
            if (res[j] === res[j - 1]) count++;
            else current += count + res[j - 1], count = 1;
        }
        res = current + count + res.at(-1);
    }
    return res;
}
