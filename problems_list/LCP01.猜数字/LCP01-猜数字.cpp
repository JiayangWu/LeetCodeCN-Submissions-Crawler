class Solution {
public:
    int game(vector<int>& guess, vector<int>& answer) {
        int n=guess.size(), cnt=0;
        for(int i=0; i<n; i++){
            if(guess[i]==answer[i]) cnt++;
        }
        return cnt;
    }
};