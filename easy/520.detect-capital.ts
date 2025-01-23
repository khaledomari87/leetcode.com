// https://leetcode.com/problems/detect-capital/solutions/6321524/clean-and-efficient/

function detectCapitalUse(word: string) {
    const codea = 'a'.charCodeAt(0), codez = 'z'.charCodeAt(0);
    const isSmall = (i: number) => codea <= word.charCodeAt(i) && word.charCodeAt(i) <= codez;
    for (let i = 1, hasSmall = isSmall(0), hasCapital = false; i < word.length; i++) {
        if (isSmall(i)) {
            hasSmall = true;
        } else {
            hasCapital = true;
        }
        if (hasCapital && hasSmall) return false;
    }
    return true;
}
