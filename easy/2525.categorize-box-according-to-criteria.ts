// https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/7407609/simulation/
function categorizeBox(length: number, width: number, height: number, mass: number) {
    const dimensions = [length, width, height];
    const volume = dimensions.reduce((a, b) => a * b);
    const isBulky = dimensions.some((d) => d >= 10 ** 4) || volume >= 10 ** 9;
    const isHeavy = mass >= 100;
    return isBulky && isHeavy ? 'Both' : isBulky ? 'Bulky' : isHeavy ? 'Heavy' : 'Neither';
}
