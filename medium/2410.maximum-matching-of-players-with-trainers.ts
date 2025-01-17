// https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/6293997/sorting-both-arrays/

function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    [players, trainers].forEach((a) => a.sort((a, b) => a - b));
    let res = 0;
    for (let j = 0; res < players.length && j < trainers.length; j++) {
        players[res] <= trainers[j] && ++res;
    }
    return res;
}
