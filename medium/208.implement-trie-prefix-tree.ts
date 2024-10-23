// https://leetcode.com/problems/implement-trie-prefix-tree/

class TrieNode {
    private _isWord = false;
    private _characters;
    constructor() {
        this._characters = new Map<string, TrieNode>();
    }
    set isWord(bool: boolean) {
        this._isWord = bool;
    }

    get isWord() {
        return this._isWord;
    }

    get characters() {
        return this._characters;
    }

    hasCharAt(s: string) {
        return this.characters.has(s);
    }

    getCharAt(s: string): TrieNode | undefined {
        return this.characters.get(s);
    }

    setCharAt(s: string) {
        return this.characters.set(s, new TrieNode());
    }
}

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
