// https://leetcode.com/problems/relative-ranks/solutions/6312039/clean-simple-and-efficient/

function findRelativeRanks(score: number[]) {
    const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
    const res = new Array<string>(score.length);
    score.map((v, i) => [v, i]).sort((a, b) => b[0] - a[0]).forEach(([_, i], place) => {
        res[i] = medals[place] || `${place + 1}`;
    });
    return res;
}
