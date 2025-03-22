// https://leetcode.com/problems/rectangle-overlap/solutions/6567821/one-liner/

const isRectangleOverlap = (rec1: [number, number, number, number], rec2: typeof rec1) =>
    rec1[0] < rec2[2] && rec1[1] < rec2[3] && rec1[2] > rec2[0] && rec1[3] > rec2[1];
