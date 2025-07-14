// https://leetcode.com/problems/generate-tag-for-video-caption/solutions/6959247/functional-programming/

function generateTag(caption: string) {
    const words = caption.trim().toLowerCase().split(' ');
    return `#${words[0]}${
        words
            .slice(1)
            .filter((w) => w)
            .map((w) => w.substring(0, 1).toUpperCase() + w.substring(1))
            .join('')
    }`.substring(0, 100);
}
