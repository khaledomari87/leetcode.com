// https://leetcode.com/problems/occurrences-after-bigram/solutions/6799502/one-line/

const findOcurrences = (T: string, A: string, B: string) =>
    T.split(' ')
        .filter((_, i, arr) => i > 1 && arr[i - 2] === A && arr[i - 1] === B);
