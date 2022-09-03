var MagicDictionary = function() {
    this.root = new Trie();
};

MagicDictionary.prototype.buildDict = function(dictionary) {
    for (const word of dictionary) {
        let cur = this.root;
        for (let i = 0; i < word.length; ++i) {
            const ch = word[i];
            const idx = ch.charCodeAt() - 'a'.charCodeAt();
            if (!cur.child[idx]) {
                cur.child[idx] = new Trie();
            }
            cur = cur.child[idx];
        }
        cur.isFinished = true;
    }
};

MagicDictionary.prototype.search = function(searchWord) {
    return dfs(searchWord, this.root, 0, false);
};

const dfs = (searchWord, node, pos, modified) => {
    if (pos === searchWord.length) {
        return modified && node.isFinished;
    }
    let idx = searchWord[pos].charCodeAt() - 'a'.charCodeAt();
    if (node.child[idx]) {
        if (dfs(searchWord, node.child[idx], pos + 1, modified)) {
            return true;
        }
    }
    if (!modified) {
        for (let i = 0; i < 26; ++i) {
            if (i !== idx && node.child[i]) {
                if (dfs(searchWord, node.child[i], pos + 1, true)) {
                    return true;
                }
            }
        }
    }
    return false;
}

class Trie {
    constructor() {
        this.isFinished = false;
        this.child = new Array(26).fill(0);
    }
}