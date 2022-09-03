class Solution {
public:
    int findMinDifference(vector<string>& timePoints) {
        int n=timePoints.size();
        vector<int> times;
        for(int i=0; i<n; i++){
            int hour=(timePoints[i][0]-'0')*10+(timePoints[i][1]-'0');
            int minu=(timePoints[i][3]-'0')*10+(timePoints[i][4]-'0');
            times.push_back(hour*60+minu);
        }
        sort(times.begin(), times.end());
        int mn=INT_MAX;
        for(int i=0; i<n-1; i++){
            mn=min(mn, times[i+1]-times[i]);
        }
        mn=min(mn, times[0]+24*60-times[n-1]);
        return mn;
    }
};