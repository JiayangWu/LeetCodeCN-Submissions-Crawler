import os
import time

FILE_FORMAT = {"C++": ".cpp", "Python3": ".py", "Python": ".py", "MySQL": ".sql", "Go": ".go", "Java": ".java",
            "C": ".c", "JavaScript": ".js", "TypeScript": ".ts", "PHP": ".php", "C#": ".cs", "Ruby": ".rb", "Swift": ".swift",
            "Scala": ".scl", "Kotlin": ".kt", "Rust": ".rs"}

# 生成文件路径
def generatePath(problem_id, problem_title, submission_language, OUTPUT_DIR):
    # 如果题目是传统的数字题号
    if problem_id[0].isdigit():
        problem_id = int(problem_id)
        # 目录名
        newpath = OUTPUT_DIR +'{:0=4}'.format(problem_id) + "." + problem_title
        # 文件名
        filename = '{:0=4}'.format(problem_id) + "-" + problem_title + FILE_FORMAT[submission_language]
    else:
        # 如果题目是新的面试题
        newpath = OUTPUT_DIR + problem_id + "." + problem_title
        # 存放的文件名
        filename = problem_id + "-" + problem_title +FILE_FORMAT[submission_language]

    if not os.path.exists(newpath): os.mkdir(newpath)

    # 完整路径
    return os.path.join(newpath, filename)

def gitPush(OUTPUT_DIR):
    today = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    os.chdir(OUTPUT_DIR)
    instructions = ["git add .", "git status",
                    "git commit -m \"" + today + "\"", "git push"]
    for ins in instructions:
        os.system(ins)
        print("~~~~~~~~~~~~~" + ins + " finished! ~~~~~~~~")