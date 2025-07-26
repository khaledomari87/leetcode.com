// https://leetcode.com/problems/jewels-and-stones/solutions/5898446/simple-and-efficient-for-large-inputs/

function numJewelsInStones(jewels: string, stones: string): number {
    const jewelsSet = new Set(jewels);
    let output = 0;
    for (const stone of stones) {
        jewelsSet.has(stone) && output++;
    }
    return output;
}
