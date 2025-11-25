// https://leetcode.com/problems/sum-of-unique-elements/solutions/7374214/counter/

const sumOfUnique = (nums: number[]) =>
    nums.reduce(
        (arr, num) => (arr[num]++, arr),
        new Array<number>(101).fill(0),
    ).reduce((r, c, n) => r + +(c === 1) * n, 0);

/* Python code

class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        return sum(num for num in nums if nums.count(num) == 1)
*/
