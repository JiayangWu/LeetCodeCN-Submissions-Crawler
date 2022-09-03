class Trie {
private:
    vector<Trie*> children;
    bool isEnd;

    Trie* searchPrefix(string prefix){
        Trie* node=this;
        for(char ch:prefix){
            ch-='a';
            if(node->children[ch]==nullptr){
                return nullptr;
            }
            node=node->children[ch];
        }
        return node;
    }

public:
    Trie(): children(26), isEnd(false){}
    
    void insert(string word) {
        Trie* node=this;
        for(char ch:word){
            ch-='a';
            if(node->children[ch]==nullptr){
                node->children[ch]=new Trie();
            }
            node=node->children[ch];
        }
        node->isEnd=true;
    }
    
    bool search(string word) {
        Trie* node=this->searchPrefix(word);
        return node!=nullptr && node->isEnd;
    }
    
    bool startsWith(string prefix) {
        return this->searchPrefix(prefix)!=nullptr;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */