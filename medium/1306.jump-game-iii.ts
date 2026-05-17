// https://leetcode.com/problems/jump-game-iii/solutions/8256478/dfs/

const canReach = (a: number[], i: number, seen = new Array<boolean>(a.length)) =>
    !a[i] || [1, -1].some((v) => {
        const j = i + v * a[i];
        if (j >= 0 && j < a.length && !seen[j]) {
            seen[j] = true;
            if (canReach(a, j, seen)) return true;
        }
        return false;
    });
