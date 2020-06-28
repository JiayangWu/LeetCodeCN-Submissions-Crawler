# 对应的读取文件格式请参考同文件夹下的 1.txt 文件
dic = {}
with open("1.txt", "r", encoding='UTF-8') as f:
    ff = f.readlines()
    for line in ff:
        pid, title = line.split("\t")
        pid = pid.replace(" ", "")
        title = title.rstrip().replace(" ", "")
        dic[title] = pid
print (dic)
