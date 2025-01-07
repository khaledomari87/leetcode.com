// https://leetcode.com/problems/implement-trie-prefix-tree/

import TrieNode from '../assets/TrieNode.ts';

class Trie {
    private _root: TrieNode = new TrieNode();
    insert(word: string): void {
        if (!word) return;
        let pointer: TrieNode = this._root;
        for (const char of word) {
            if (!pointer.hasCharAt(char)) {
                pointer.setCharAt(char);
            }
            pointer = pointer.getCharAt(char)!;
        }
        pointer.isWord = true;
    }

    search(word: string): boolean {
        let pointer: TrieNode = this._root;
        for (const char of word) {
            if (!pointer.hasCharAt(char)) {
                return false;
            }
            pointer = pointer.getCharAt(char)!;
        }
        return pointer.isWord;
    }

    startsWith(prefix: string): boolean {
        let pointer: TrieNode = this._root;
        for (const char of prefix) {
            if (!pointer.hasCharAt(char)) {
                return false;
            }
            pointer = pointer.getCharAt(char)!;
        }
        return true;
    }
}
