// https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/8250827/clean-binary-search/

import _ from 'lodash';

function answerQueries(nums: number[], queries: number[]) {
    let s = 0;
    const pre = nums.sort((a, b) => a - b).map((v) => (s += v));
    return queries.map((v) => _.sortedLastIndex(pre, v));
}
