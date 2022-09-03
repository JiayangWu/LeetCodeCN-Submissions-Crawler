#include<bits/stdc++.h>
#define vi vector<int>
#define pb push_back
#define fi first
#define se second
#define mp make_pair
#define bc(x) __builtin_popcount(x)
#define re register
#define il inline
#define pii pair<int,int>
#define pil pair<int,long long>
#define pll pair<long long,long long>
#define mem0(x) memset(x,0,sizeof(x))
#define mem0x3f(x) memset(x,0x3f,sizeof(x))
#define N 1050000
typedef long long ll;
typedef unsigned long long ull;
using namespace std;
class Solution {
public:
	const int M=26;
	unordered_map<string,int>tot;
    ll distinctNames(vector<string>& ideas) {
		vector<vector<ll>>all(M,vector<ll>(M));
        for(const auto &i:ideas){
        	tot[i.substr(1)]|=(1<<(i[0]-'a'));
		}
        ll ans=0;
        for(const auto &i:tot){
            for(int j=0;j<M;++j){
            	if(i.second&(1<<j))
                    for(int k=0;k<M;++k)
                        if(!(i.second&(1<<k))){
                        	ans+=all[k][j];
						} 
			}
            for(int j=0;j<M;++j){
            	if(i.second&(1<<j))
                    for(int k=0;k<M;++k)
                        if(!(i.second&(1<<k))){
                        	++all[j][k];
						}
			}
        }
        return ans<<1;
    }
};