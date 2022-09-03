class Solution {
public:
    void change(string& word, int idx){
        char original[10]={'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        bool flag=false;
        for(int i=0; i<10; i++){
            if(word[0]==original[i]){
                flag=true;
                break;
            }
        }
        
        if(!flag){
            char first=word[0];
            word=word.substr(1);
            // cout<<word<<word.length()<<endl;
            word.push_back(first);
        }
        word+="ma";

        for(int i=0; i<idx; i++){
            word+="a";
        }
    }
    string toGoatLatin(string sentence) {
        int len=sentence.length();
        int idx=1;
        string ans="", word="";
        for(int i=0; i<len; i++){
            if(i==len-1){
                word.push_back(sentence[len-1]);

                change(word, idx);
                ans+=word;
            }
            if(sentence[i]==' '){
                // if(idx==1) ans.push_back(' ');
                change(word, idx);
                ans+=word+" ";

                word="";
                idx++;
            }
            if(isalpha(sentence[i]))
                word.push_back(sentence[i]);
        }
        return ans;
    }
};