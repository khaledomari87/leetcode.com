// https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/6293997/sorting-both-arrays/

function matchPlayersAndTrainers(players: number[], trainers: number[]) {
    const p = players.sort((a, b) => a - b).length;
    const t = trainers.sort((a, b) => a - b).length;
    let res = 0;
    for (let j = 0; res < p && j < t; j++) {
        res += +(players[res] <= trainers[j]);
    }
    return res;
}
