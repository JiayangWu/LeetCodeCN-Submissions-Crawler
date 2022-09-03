class Solution {
public:
    vector<string> ans;
    vector<int> ip;
    const int segments=4;

    void dfs(string& s, int segStart, int segId){
        // 可能多分几段，这样可以减少路径
        if(segId==segments){
            if(segStart==s.size()){
                string ipAddr;
                for(int i=0; i<segments; i++){
                    ipAddr+=to_string(ip[i]);
                    if(i!=segments-1){
                        ipAddr+=".";
                    }
                }
                ans.push_back(ipAddr);
            }
            return;
        }

        if(segStart==s.size()){
            return;
        }

        if(s[segStart]=='0'){
            ip[segId]=0;
            dfs(s, segStart+1, segId+1);
        }

        int addr=0;
        for(int segEnd=segStart; segEnd<s.size(); segEnd++){
            addr=addr*10+(s[segEnd]-'0');
            if(addr>0 && addr<=0xFF){
                ip[segId]=addr;
                dfs(s, segEnd+1, segId+1);
            }else{
                break;
            }
        }
    }
    vector<string> restoreIpAddresses(string s) {
        ip.resize(segments);
        dfs(s, 0, 0);
        return ans;
    }
};