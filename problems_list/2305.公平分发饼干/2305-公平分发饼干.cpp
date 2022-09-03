class Solution {
public:
	int n,a[100],summ[100],kk,minn;
	void dfs(int u){
		if(u==n+1){
			int maxx=0;
			for(int i=1;i<=kk;i++){
				maxx=max(maxx,summ[i]);
			}
			minn=min(minn,maxx);
			return ;
		}
		for(int i=1;i<=kk;i++){
			summ[i]+=a[u];
			dfs(u+1);
			summ[i]-=a[u];
		}
	}
	int distributeCookies(vector<int>& cookies, int k) {
        n=cookies.size();kk=k;
        for(int i=1;i<=n;i++) a[i]=cookies[i-1];
        minn=1e9;
		dfs(1);
		return minn;
    }
};