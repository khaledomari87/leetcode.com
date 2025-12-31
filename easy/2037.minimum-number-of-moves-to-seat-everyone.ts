// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/7452659/sort-greedy-one-line/

const minMovesToSeat = (seats: number[], students: number[]) =>
    [students, seats].map((a) => a.sort((a, b) => a - b))[0]
        .reduce((res, st, i) => res + Math.abs(st - seats[i]), 0);
