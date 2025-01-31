// https://leetcode.com/problems/can-place-flowers/solutions/6353624/single-scan/

function canPlaceFlowers(flowerbed: (0 | 1)[], n: number): boolean {
    let empty = 0, count = 1;
    for (let l = 0, r = 0; r < flowerbed.length; r++) {
        if (flowerbed[r] === 1) {
            empty += (count - 1) >> 1;
            if (empty >= n) return true;
            l = r + 1;
            count = 0;
        } else {
            count++;
        }
    }
    if (!flowerbed.at(-1)!) {
        empty += count >> 1;
    }
    return empty >= n;
}
