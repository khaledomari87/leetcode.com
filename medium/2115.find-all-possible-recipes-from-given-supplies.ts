// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/6562831/clean-dfs/

function findAllRecipes(recipes: string[], ings: string[][], supplies: string[]) {
    const canMake = new Set(supplies);
    const recpMap = recipes.reduce((map, s, i) => map.set(s, i), new Map<string, number>());
    const seen = new Set<string>();
    const dfs = (recp: typeof recipes[number]): boolean => {
        if (canMake.has(recp)) return true;
        const i = recpMap.get(recp);
        if (i === undefined || seen.has(recp)) return false;
        return seen.add(recp) && Boolean(ings[i].every((ing) => dfs(ing)) && canMake.add(recp));
    };
    return recipes.filter((r) => dfs(r));
}
