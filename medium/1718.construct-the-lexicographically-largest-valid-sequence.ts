// https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/6427404/backtracking/

function constructDistancedSequence(n: number): number[] {
    function backtrack(i: number): boolean {
        if (i === resultSequence.length) return true;
        if (resultSequence[i] !== 0) return backtrack(i + 1);
        for (let num = n; num >= 1; num--) {
            if (isNumberUsed[num]) continue;

            isNumberUsed[num] = true;
            resultSequence[i] = num;
            if (num === 1) {
                if (backtrack(i + 1)) return true;
            } else if (i + num < resultSequence.length && resultSequence[i + num] === 0) {
                resultSequence[i + num] = num;
                if (backtrack(i + 1)) return true;
                resultSequence[i + num] = 0;
            }
            resultSequence[i] = 0;
            isNumberUsed[num] = false;
        }
        return false;
    }

    const resultSequence: number[] = new Array(n * 2 - 1).fill(0);
    const isNumberUsed: boolean[] = new Array(n + 1);
    backtrack(0);
    return resultSequence;
}
