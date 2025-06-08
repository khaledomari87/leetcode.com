// https://leetcode.com/problems/lexicographical-numbers/solutions/6821732/iterative/

function lexicalOrder(n: number) {
    const res: number[] = [];
    for (let i = 0, curr = 1; i < n; i++) {
        res.push(curr);
        curr *= 10;
        if (curr > n) {
            while (curr % 10 == 9 || curr >= n) {
                curr = Math.floor(curr / 10);
            }
            curr++;
        }
    }
    return res;
}
