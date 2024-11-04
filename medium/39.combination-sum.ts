// https://leetcode.com/problems/combination-sum/

function combinationSum(cands: number[], grandTarget: number): number[][] {
    const n = cands.length;
    const output: number[][] = [];
    const track: number[] = [];
    const rbt = (i: number, target: number) => {
        if (cands[i] === target) output.push([...track, cands[i]]);
        if (i === n || cands[i] >= target) return;
        track.push(cands[i]);
        for (let j = i; j < n; j++) rbt(j, target - cands[i]);
        track.pop();
    };
    for (let i = 0; i < n; i++) rbt(i, grandTarget);
    return output;
}

// console.log(`(${combinationSum([2,3,5], 8).join('),(')})`);
