// https://leetcode.com/problems/even-number-of-knight-moves/solutions/8420149/one-line/

import _ from 'lodash';

const canReach = (start: number[], target: number[]) => _.sum(start) % 2 === _.sum(target) % 2;
