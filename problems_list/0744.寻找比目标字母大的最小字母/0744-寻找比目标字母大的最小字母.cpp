class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int l=0, r=letters.size()-1;
        while(l<r){
            int m=l+((r-l)>>1);
            if(letters[m]>target){
                r=m;
            }else if(letters[m]<=target){
                l=m+1;
            }
        }
        return letters[r]>target?letters[r]:letters[0];
    }
};