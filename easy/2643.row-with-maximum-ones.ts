// https://leetcode.com/problems/row-with-maximum-ones/solutions/7350417/enumeration/

const rowAndMaximumOnes = (mat: number[][]) =>
    mat.reduce(
        (res, row, i) => {
            const ones = row.reduce((a, b) => a + b);
            return ones > res[1] ? [i, ones] : res;
        },
        [-1, -1],
    );
