// https://leetcode.com/problems/furthest-point-from-origin/solutions/7745299/clean-linear-solution/

function furthestDistanceFromOrigin(moves: string) {
    let R = 0, L = 0, _ = 0;
    for (const m of moves) {
        m === 'L' ? L++ : m === 'R' ? R++ : _++;
    }
    return _ + Math.abs(L - R);
}
