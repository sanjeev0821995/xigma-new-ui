import os
from pathlib import Path


def pytest_configure(config):
    Path("reports").mkdir(exist_ok=True)
    os.environ.setdefault("PYTHONUNBUFFERED", "1")
