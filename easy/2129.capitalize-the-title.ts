// https://leetcode.com/problems/capitalize-the-title/solutions/7109401/clean-solution/

const capitalizeTitle = (title: string) =>
    title.split(' ').map((word) =>
        word[0][word.length < 3 ? 'toLowerCase' : 'toUpperCase']() +
        word.substring(1).toLowerCase()
    ).join(' ');
