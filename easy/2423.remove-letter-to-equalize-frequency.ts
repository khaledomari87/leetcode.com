// https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/8362914/not-an-easy-one/

import _ from 'lodash';

function equalFrequency(word: string) {
    const freq = _.countBy(word), vals = _.countBy(Object.values(freq));
    if (_.size(vals) == 1) return _.size(freq) == 1 || freq[word[0]] == 1;
    if (_.size(vals) > 2) return false;
    const [[a, b], [c, d]] = Object.entries(vals).map(([k, v]) => [+k, v]);
    if (a == 1 && b == 1) return true;
    if (c == 1 && d == 1) return true;
    return Math.abs(a - c) == 1 && (a > c ? b : d) == 1;
}
