import os


class Config:
    """Runtime configuration loaded from environment variables."""

    BASE_URL = os.getenv("STORE_URL", "https://adnabu-test-8.myshopify.com")
    STORE_PASSWORD = os.getenv("STORE_PASSWORD", "AdNabuQA")
    PRODUCT_NAME = os.getenv("PRODUCT_NAME", "Nano CO2 Inflator")
    HEADLESS = os.getenv("HEADLESS", "true").lower() == "true"
    WAIT_TIMEOUT_SECONDS = int(os.getenv("WAIT_TIMEOUT_SECONDS", "20"))
