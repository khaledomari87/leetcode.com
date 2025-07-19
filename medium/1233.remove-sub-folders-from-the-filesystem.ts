// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/6976988/sorting-trie-approaches/

import TrieNode from '../assets/TrieNode.ts';

function removeSubfolders(folder: string[]) {
    const res: string[] = [folder.sort()[0]];
    for (let i = 1, n = folder.length; i < n; i++) {
        if (!folder[i].startsWith(`${res.at(-1)!}/`)) {
            res.push(folder[i]);
        }
    }
    return res;
}

function removeSubfoldersTrie(folder: string[]) {
    const root = new TrieNode();
    for (const path of folder) {
        let curr = root;
        for (const part of path.split('/')) {
            if (part === '') continue;
            if (!curr.hasCharAt(part)) curr.setCharAt(part);
            const next = curr.getCharAt(part);
            if (next) curr = next;
        }
        curr.isWord = true;
    }
    const res: string[] = [];
    for (const path of folder) {
        let curr = root;
        const parts = path.split('/');
        let isSubfolder = false;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (part === '') continue;
            const next = curr.getCharAt(part);
            if (!next) break;
            if (next.isWord && i !== parts.length - 1) {
                isSubfolder = true;
                break;
            }
            curr = next;
        }
        if (!isSubfolder) res.push(path);
    }
    return res;
}
