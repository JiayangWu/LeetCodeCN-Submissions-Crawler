# LeetCodeCN-Submissions-Crawler
一句话简介：本项目是一个用来爬取力扣中国上**个人提交**的代码的爬虫。

注意：是爬取【个人】也就是【你自己的账号】提交的代码，不是爬取【他人】的代码，更不是爬取【官方代码】！！！

# 灵感
**辛辛苦苦三个月，勤勤恳恳四百题，leetcode一片绿，github万里白。**

手动上传是不可能手动上传的，这辈子也懒得手动上传。

找了一圈只能找到leetcode的提交爬虫，没有力扣中国的，所以只能自己造轮子了。

学了两天爬虫鼓捣了这么个东西出来，我用的蛮顺手的，希望你们也能用的顺手。

我的生成文件夹可以参考：https://github.com/JiayangWu/LeetCode-Python

我的题解博客可以参考：https://blog.csdn.net/qq_32424059

# 使用方法
1. clone或者download到本地
2. 安装依赖库 pip install -r requirements.txt
3. 配置config.json文件，用户名，密码，本地存储地址，时间控制（天）
4. python3 main.py

# 项目演示
![image](https://github.com/JiayangWu/LeetCodeCN-Submissions-Crawler/blob/master/demo.gif)
这个GIF是由LICEcap V1.28生成的，下载地址https://www.cockos.com/licecap/
# 一些说明
1. 目前支持的语言有：{"cpp": ".cpp", "python3": ".py", "python": ".py", "mysql": ".sql", "golang": ".go", "java": ".java",
                   "c": ".c", "javascript": ".js", "php": ".php", "csharp": ".cs", "ruby": ".rb", "swift": ".swift",
                   "scala": ".scl", "kotlin": ".kt", "rust": ".rs"}
2. 致谢@fyears， 本脚本的login函数来自https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba
3. config.json里的time代表爬多少天之内的submission，比如我每天爬今天提交的题解，就是设置为0.8就好了，如果第一次使用需要爬所有的题解，就设一个大一点的数比如1000之类的。
4. 爬虫教程可以看https://blog.csdn.net/c406495762/column/info/15321

# 版本介绍
当前版本V1.3，于2019/12/09上传
1. 修改爬虫逻辑并优化路径设置，感谢[@VirgilChen97](https://github.com/VirgilChen97)
3. 修复git push时双引号不匹配的报错
4. 修复write函数只能接受一个参数的报错

历史版本V1.2，于2019/11/13上传
1. 由于力扣网站登录方式变动，需要解决登录无限失败的问题，小改了login函数
2. 更新ProblemList至题号1255，新的题号需要在ProblemList里手动添加
3. 修复ProbelmListGenerator.py读取txt文件时，文件编码gbk报错的bug

历史版本V1.1，于2019/8/8上传
1. 由于力扣网站登录方式变动，需要解决登录无限失败的问题，小改了login函数
2. 更新ProblemList至题号1147， 新的题号需要在ProblemList里手动添加
3. 新增一个ProblemListGenerator函数，用于生成新的ProblemList

历史版本V1.0，于2019/5/24上传
1. 目前支持爬取力扣中国（leetcode-cn.com)上的个人提交的代码
2. 支持时间控制，即可以自由选择爬取**前多少天之内**的代码，比如30天内，2天内
3. 一键上传Github，注意本功能需要**手动init**
4. 在config.json里调整参数
5. **注意保护个人用户名及密码**
6. 目前支持到题号1044，新的题号需要在ProblemList里手动添加

