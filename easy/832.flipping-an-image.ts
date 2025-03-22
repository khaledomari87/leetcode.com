// https://leetcode.com/problems/flipping-an-image/solutions/6567485/one-liner/

const flipAndInvertImage = (img: number[][]) => img.map((r) => r.reverse().map((c) => 1 - c));
