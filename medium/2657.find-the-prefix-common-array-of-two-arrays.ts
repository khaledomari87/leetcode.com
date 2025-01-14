// https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/6278029/prefix-appearance-clean-and-efficient/

function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const seen = new Array<boolean>();
    return A.reduce((res, _, i) => {
        const prev = res[i - 1] || 0;
        if (A[i] === B[i]) res[i] = prev + 1; // skip setting the map
        else {
            const itemA = seen[A[i] - 1], itemB = seen[B[i] - 1];
            res[i] = prev + (itemA && itemB ? 2 : itemA || itemB ? 1 : 0);
            !itemA && (seen[A[i] - 1] = true);
            !itemB && (seen[B[i] - 1] = true);
        }
        return res;
    }, new Array<number>(A.length));
}
