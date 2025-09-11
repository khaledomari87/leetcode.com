// https://leetcode.com/problems/count-items-matching-a-rule/solutions/7179869/2-lines/

function countMatches(items: string[], k: 'type' | 'color' | 'name', v: string) {
    const map = { type: 0, color: 1, name: 2 } as const;
    return items.reduce((res, item) => res + +(item[map[k]] === v), 0);
}
