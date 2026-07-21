// https://leetcode.com/problems/rearrange-string-to-avoid-character-pair/solutions/8410822/one-line/

import _ from 'lodash';

function rearrangeString(s: string, x: string, y: string) {
    return s.replaceAll(x, '') + x.repeat(_.countBy(s)[x] || 0);
}
