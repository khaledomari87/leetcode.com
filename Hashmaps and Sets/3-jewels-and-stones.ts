// https://leetcode.com/problems/jewels-and-stones/

function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsSet = new Set(jewels);
  let output = 0;
  for (const stone of stones) {
    jewelsSet.has(stone) && output++;
  }
  return output;
};
