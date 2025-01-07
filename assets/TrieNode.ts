export default class TrieNode {
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
