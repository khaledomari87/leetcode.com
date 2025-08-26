function areaOfMaxDiagonal(dimensions: [number, number][]) {
    let res = 0, maxDiag = 0;
    const { max, sqrt } = Math;
    for (const [w, h] of dimensions) {
        const diag = sqrt(w * w + h * h);
        if (diag > maxDiag) res = w * h;
        else if (diag === maxDiag) res = max(res, w * h);
        maxDiag = max(maxDiag, diag);
    }
    return res;
}

const areaOfMaxDiagonalSort = (dimensions: [number, number][], { sqrt } = Math) =>
    dimensions.sort(([w1, h1], [w2, h2]) =>
        sqrt(w2 * w2 + h2 * h2) - sqrt(w1 * w1 + h1 * h1) || w2 * h2 - w1 * h1
    )[0].reduce((w, h) => w * h);
