// https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/8356618/clean-linear-solution/

function minNumberOfHours(myEn: number, myXp: number, opEn: number[], opXp: number[]) {
    let neededEn = 0, neededXp = 0;
    for (let i = 0, n = opEn.length, max = Math.max; i < n; i++) {
        neededEn = max(neededEn, neededEn + opEn[i] - myEn + 1);
        myEn = max(myEn - opEn[i], opEn[i] + 1 - opEn[i]);
        neededXp = max(neededXp, neededXp + opXp[i] - myXp + 1);
        myXp = max(myXp + opXp[i], opXp[i] + 1 + opXp[i]);
    }
    return neededEn + neededXp;
}

function minNumberOfHours2(myEn: number, myXp: number, opEn: number[], opXp: number[]) {
    let neededEn = 0, neededXp = 0;
    for (let i = 0, n = opEn.length; i < n; i++) {
        if (myEn <= opEn[i]) {
            neededEn += opEn[i] - myEn + 1;
            myEn = opEn[i] + 1;
        }
        myEn -= opEn[i];
        if (myXp <= opXp[i]) {
            neededXp += opXp[i] - myXp + 1;
            myXp = opXp[i] + 1;
        }
        myXp += opXp[i];
    }
    return neededEn + neededXp;
}
