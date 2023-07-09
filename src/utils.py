import os
import time

from src.logger import logger

FILE_FORMAT = {
    "C++": ".cpp",
    "Python3": ".py",
    "Python": ".py",
    "MySQL": ".sql",
    "Go": ".go",
    "Java": ".java",
    "C": ".c",
    "JavaScript": ".js",
    "TypeScript": ".ts",
    "PHP": ".php",
    "C#": ".cs",
    "Ruby": ".rb",
    "Swift": ".swift",
    "Scala": ".scl",
    "Kotlin": ".kt",
    "Rust": ".rs"}

def generatePath(problem_id, problem_title, submission_language, OUTPUT_DIR):
    # 如果题目是传统的数字题号
    if problem_id[0].isdigit():
        problem_id = int(problem_id)
        pathname = OUTPUT_DIR + "/" + \
            '{:0=4}'.format(problem_id) + "." + problem_title
        filename = '{:0=4}'.format(problem_id) + "-" + \
            problem_title + FILE_FORMAT[submission_language]
    else:
        # 如果题目是新的面试题, 比如 剑指 Offer 27-二叉树的镜像.py
        pathname = OUTPUT_DIR + "/" + problem_id + "." + problem_title
        filename = problem_id + "-" + problem_title + \
            FILE_FORMAT[submission_language]

    if not os.path.exists(pathname):
        os.mkdir(pathname)

    return os.path.join(pathname, filename)


def gitPush(OUTPUT_DIR):
    today = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    os.chdir(OUTPUT_DIR)
    instructions = ["git add .", "git status",
                    "git commit -m \"" + today + "\"", "git push"]
    try:
        for instruction in instructions:
            os.system(instruction)
            logger.info("~~~~~~~~~~~~~" + instruction + " finished! ~~~~~~~~")
    except Exception:
        logger.warning(
            "Git operations failed, please install git, skip it for now.")