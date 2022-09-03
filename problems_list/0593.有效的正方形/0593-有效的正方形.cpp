class Solution {
public:
    int getEdge(vector<int>& p1, vector<int>& p2){
        return (p1[0]-p2[0])*(p1[0]-p2[0])+(p1[1]-p2[1])*(p1[1]-p2[1]);
    }
    int dists[4][4];
    bool validSquare(vector<int>& p1, vector<int>& p2, vector<int>& p3, vector<int>& p4) {
        dists[0][1]=getEdge(p1, p2);
        dists[0][2]=getEdge(p1, p3);
        dists[0][3]=getEdge(p1, p4);
        dists[1][2]=getEdge(p2, p3);
        dists[1][3]=getEdge(p2, p4);
        dists[2][3]=getEdge(p3, p4);
        for(int i=0; i<4;i ++){
            for(int j=0; j<4; j++){
                if(i<=j) continue;
                dists[i][j]=dists[j][i];
            }
        }
        for(int i=0; i<4; i++){
            int a=-1, b=-1, c=-1;
            for(int j=0; j<4; j++){
                if(i!=j){
                    if(a==-1) a=dists[i][j];
                    else if(b==-1) b=dists[i][j];
                    else c=dists[i][j];
                }
            }
            if(a>c) swap(a, c);
            if(b>c) swap(b, c);
            if(a!=b || a+b!=c || b==0) return false;
        }

        return true;
    }
};