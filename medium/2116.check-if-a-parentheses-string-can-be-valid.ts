// https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/6268172/constant-space/

function canBeValid(s: string, locked: string) {
    if (s.length % 2 === 1) return false;

    let openCount = 0, unlockedCount = 0;
    // Iterate through the string to handle '(' and ')'.
    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '0') unlockedCount++;
        else if (s[i] === '(') openCount++;
        else if (s[i] === ')') {
            if (openCount > 0) openCount--;
            else if (unlockedCount > 0) unlockedCount--;
            else return false;
        }
    }

    if (!unlockedCount) return true;

    // Match remaining open brackets with unlocked characters.
    for (let i = s.length - 1, balanceCount = 0; i >= 0; i--) {
        if (locked[i] === '0') {
            balanceCount--;
            unlockedCount--;
        } else if (s[i] === '(') {
            balanceCount++;
            openCount--;
        } else if (s[i] === ')') balanceCount--;

        if (balanceCount > 0) return false;
        if (unlockedCount === 0 && openCount === 0) return true;
    }
    return openCount <= 0;
}
