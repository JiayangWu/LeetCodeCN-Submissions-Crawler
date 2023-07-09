# LeetCodeCN-Submissions-Crawler
[English introduction](https://github.com/JiayangWu/LeetCodeCN-Submissions-Crawler/blob/master/README-EN.md#leetcodecn-submissions-crawler)

一句话简介：本项目是一个用来爬取力扣中国上**个人提交**的代码的爬虫。

注意：是爬取【个人】也就是【你自己的账号】提交的代码，不是爬取【他人】的代码，更不是爬取【官方代码】！！！

# 灵感
**辛辛苦苦三个月，勤勤恳恳四百题，leetcode一片绿，github万里白。**

手动上传是不可能手动上传的，这辈子也懒得手动上传。

找了一圈只能找到LeetCode的提交爬虫，没有力扣中国的，所以只能自己造轮子了。

学了两天爬虫鼓捣了这么个东西出来，我用的蛮顺手的，希望你们也能用的顺手。

我的生成文件夹可以参考：https://github.com/JiayangWu/LeetCode-Python

我的题解博客可以参考：https://blog.csdn.net/qq_32424059

# 使用方法
1. `clone`或者`download`到本地
2. 安装依赖库 `pip install -r requirements.txt`
3. 配置`config.json`文件，用户名，密码，本地存储地址，时间控制（天），是否覆盖已有的题解
4. 在命令行下运行`python3 main.py`或者使用IDE编译运行
5. 如果想传入命令行指令，请查看main.py中的相关实现

# 项目演示
![image](https://github.com/JiayangWu/LeetCodeCN-Submissions-Crawler/blob/master/doc/demo.gif)
这个GIF是由LICEcap V1.28生成的，[下载地址](https://www.cockos.com/licecap/)

# 一些说明
1. 目前支持的语言有：`{"cpp": ".cpp", "python3": ".py", "python": ".py", "mysql": ".sql", "golang": ".go", "java": ".java",
                   "c": ".c", "javascript": ".js", "TypeScript": ".ts", "php": ".php", "csharp": ".cs", "ruby": ".rb", "swift": ".swift",
                   "scala": ".scl", "kotlin": ".kt", "rust": ".rs"}`
2. 致谢@fyears， 本脚本的`login`函数来自https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba
3. `config.json`里的`day`代表爬多少天之内的`submission`，比如我每天爬今天提交的题解，就是设置为`0.8`就好了，如果第一次使用需要爬所有的题解，就设一个大一点的数比如`1000`之类的。
4. `config.json`里的`overwrite`代表是否覆盖之前的题解。如果是`True`就代表如果你隔一段时间`AC`了一道题两次，第二次的题解会覆盖第一次的题解。但是你第一次的题解依然可以在`commit`里找到记录。
5. 爬虫教程可以看https://blog.csdn.net/c406495762/column/info/15321

# 版本介绍
当前版本V3.1，于2023/07/08上传
1. 添加命令行支持

历史版本V3.0，于2023/07/07上传
1. 重构代码
2. 如果输出目录不存在，即使有中间文件夹，也会创建完整路径
3. 未安装git时，跳过git相关操作


历史版本V2.4，于2023/07/07上传
1. 输出Log level和时间戳
2. 修复在Windows上在获取problem set时，不能正确decode的问题


历史版本V2.3，于2023/06/11上传
1. 实现了当一道题的题号从暂时题号变更为永久题号时，自动覆盖已经写到本地的记录的功能。之前可能会同时存在暂时题号和永久题号的两条记录。

历史版本V2.2，于2023/05/22上传
1. 实现了自动更新题号，以后可以直接从官网下载题号和题目标题，并存储在`mapping.json`里
2. 代码重构
3. 感谢[frallisland](https://github.com/frallisland)

历史版本V2.1，于2023/05/13上传
1. 更新`ProblemList`至题号2688，新的题号需要在`ProblemList`里手动添加

历史版本V2.0，于2023/05/05上传
1. 更新`ProblemList`至题号2668，新的题号需要在`ProblemList`里手动添加
2. 更新登录网址
3. 优化获取`ProblemList`的方法。现在只需要在显示有全部题目的网页上通过网页审查元素复制`html`代码并存储到同一文件夹下的[LeetCode.html](https://github.com/JiayangWu/LeetCode-Crawler-Sample-HTML)，然后运行`Python ProblemListGenerator.py`即可获取最近的所有题目和题号的对应。
4. 感谢[frallisland](https://github.com/frallisland)

历史版本V1.9，于2021/04/30上传
1. 更新`ProblemList`至题号1841，新的题号需要在`ProblemList`里手动添加

历史版本V1.8，于2021/02/10上传
1. 更新`ProblemList`至题号1755，新的题号需要在`ProblemList`里手动添加

历史版本V1.7，于2020/08/27上传
1. 修复未知原因造成的无法爬取代码的bug
2. 更新`ProblemList`至题号1563，新的题号需要在`ProblemList`里手动添加

历史版本V1.6，于2020/07/27上传
1. 修复因LC-CN数据存储方式变更，导致的无法爬取代码的bug
2. 更新`ProblemList`至题号1531，新的题号需要在`ProblemList`里手动添加

历史版本V1.5，于2020/06/14上传
1. 优化`main.py`，感谢[@zxMrlc](https://github.com/zxmrlc)
2. 更新`ProblemList`至题号1473，新的题号需要在`ProblemList`里手动添加

历史版本V1.4，于2020/03/01上传
1. 更新`ProblemList`至题号1368，新的题号需要在`ProblemList`里手动添加
2. 新增对面试题的爬虫支持

历史版本V1.3，于2019/12/09上传
1. 修改爬虫逻辑并优化路径设置，感谢[@VirgilChen97](https://github.com/VirgilChen97)
3. 修复`git push`时双引号不匹配的报错
4. 修复`write`函数只能接受一个参数的报错

历史版本V1.2，于2019/11/13上传
1. 由于力扣网站登录方式变动，需要解决登录无限失败的问题，小改了`login`函数
2. 更新`ProblemList`至题号1255，新的题号需要在`ProblemList`里手动添加
3. 修复`ProbelmListGenerator.py`读取txt文件时，文件编码gbk报错的bug

历史版本V1.1，于2019/8/8上传
1. 由于力扣网站登录方式变动，需要解决登录无限失败的问题，小改了`login`函数
2. 更新`ProblemList`至题号1147， 新的题号需要在`ProblemList`里手动添加
3. 新增一个`ProblemListGenerator`函数，用于生成新的`ProblemList`

历史版本V1.0，于2019/5/24上传
1. 目前支持爬取力扣中国（leetcode-cn.com)上的个人提交的代码
2. 支持时间控制，即可以自由选择爬取**前多少天之内**的代码，比如30天内，2天内
3. 一键上传Github，注意本功能需要**手动init**
4. 在`config.json`里调整参数
5. **注意保护个人用户名及密码**
6. 目前支持到题号1044，新的题号需要在ProblemList里手动添加

