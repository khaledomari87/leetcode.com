// https://leetcode.com/problems/sort-the-people/solutions/7266753/one-line/

const sortPeople = (names: string[], H: number[]) =>
    names
        .map((name, i) => [name, H[i]] as [string, number])
        .sort((a, b) => b[1] - a[1])
        .map((v) => v[0]);
