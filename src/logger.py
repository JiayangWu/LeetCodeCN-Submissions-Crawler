import logging


class Logger:
    LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"
    DATE_FORMAT = "%Y/%m/%d %H:%M:%S"
    logging.getLogger().setLevel(logging.DEBUG)

    logging.basicConfig(
        level=logging.INFO, format=LOG_FORMAT, datefmt=DATE_FORMAT
    )

    def debug(msg):
        logging.debug(msg)

    def info(self, msg):
        logging.info(msg)

    def warning(self, msg):
        logging.warning(msg)

    def error(self, msg):
        logging.error(msg)

    def critical(self, msg):
        logging.critical(msg)


logger = Logger()
