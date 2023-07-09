import os
import time

from logger import logger

FILE_FORMAT = {"C++": ".cpp", "Python3": ".py", "Python": ".py", "MySQL": ".sql", "Go": ".go", "Java": ".java",
               "C": ".c", "JavaScript": ".js", "TypeScript": ".ts", "PHP": ".php", "C#": ".cs", "Ruby": ".rb", "Swift": ".swift",
               "Scala": ".scl", "Kotlin": ".kt", "Rust": ".rs"}

TEMP_FILE_PATH = "./temp_problemset.txt"


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
    for instruction in instructions:
        os.system(instruction)
        logger.info("~~~~~~~~~~~~~" + instruction + " finished! ~~~~~~~~")


def wrap_up_scraping(not_found_list, problems_to_be_reprocessed, MAPPING):
    if not_found_list:
        logger.warning("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        logger.warning("Warning: Writes for following problems failed due to unknown Problem id!")
        logger.warning("This issue can be solved by updating problemset")
        for problem_title in not_found_list:
            logger.warning(problem_title)
        logger.warning("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")

    # 二次处理新题目，以永久题号替代暂时题号
    if os.path.exists(TEMP_FILE_PATH):
        with open(TEMP_FILE_PATH, "r") as f:
            logger.info("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            logger.info("Now deal with problems with temporary problem IDs.")
            logger.info("Renaming or deleting would be needed.")
            for line in f.readlines():
                title, old_path = line.rstrip().split(" ", 1)
                old_problem_id, problem_title = title.split("-", 1)

                permanent_problem_id = MAPPING.get(problem_title, 0)
                new_problem_id = '{:0>4}'.format(permanent_problem_id)
                if not permanent_problem_id:
                    problems_to_be_reprocessed.append((title, old_path))
                else:
                    new_path = old_path.replace(old_problem_id, new_problem_id)

                old_dir_path, old_file_name = os.path.split(old_path)
                new_dir_path, new_file_name = os.path.split(new_path)

                if os.path.exists(new_path):
                    # if new path exists, just delete old path
                    logger.info(
                        "{new_file_name} exists, {old_file_name} will be deleted".format(new_file_name=new_file_name, old_file_name=new_file_name)
                    )
                    os.remove(old_path)
                    os.rmdir(old_dir_path)
                    continue

                os.makedirs(new_dir_path, exist_ok=True)
                os.rename(old_dir_path, new_dir_path)
                os.rename(os.path.join(new_dir_path, old_file_name), new_path)

                logger.info("{old_file_name} has been renamed to {new_file_name}".format(old_file_name=old_file_name, new_file_name=new_file_name))

        os.remove(TEMP_FILE_PATH)
        
    # 把暂时题号的题目写到本地
    if problems_to_be_reprocessed:
        logger.info("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        logger.info("The following problems have been recoreded to local logs for reprocessing, ")
        logger.info("when their permenant problem IDs become available.")
        with open(TEMP_FILE_PATH, "w") as f:
            for title, path in problems_to_be_reprocessed:
                f.write(title + " " + path + "\n")
                logger.info(title)
        logger.info("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
