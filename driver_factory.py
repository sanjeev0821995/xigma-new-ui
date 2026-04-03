from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from config import Config


def create_chrome_driver() -> webdriver.Chrome:
    """Create a Chrome WebDriver instance with sensible defaults."""
    options = Options()
    if Config.HEADLESS:
        options.add_argument("--headless=new")
    options.add_argument("--window-size=1440,900")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--lang=en-US")
    return webdriver.Chrome(options=options)
