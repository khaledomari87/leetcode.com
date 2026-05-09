// https://leetcode.com/problems/score-validator/solutions/8180231/simple-simulation/

function scoreValidator(events: string[]) {
    const res = [0, 0]; // score, counter
    for (let i = 0; i < events.length && res[1] < 10; i++) {
        if (events[i] === 'W') res[1]++;
        else if (['WD', 'NB'].includes(events[i])) res[0]++;
        else res[0] += +events[i];
    }
    return res;
}
