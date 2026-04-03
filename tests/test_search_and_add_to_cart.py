from driver_factory import create_chrome_driver
from config import Config
from pages.storefront_page import StorefrontPage


def test_search_and_add_product_to_cart_success():
    """
    Scenario:
    1) Open store
    2) Unlock storefront (if password page is shown)
    3) Search for product
    4) Open product details
    5) Add to cart
    6) Verify item appears in cart
    """
    driver = create_chrome_driver()
    try:
        page = StorefrontPage(driver)
        page.open_store(Config.BASE_URL)
        page.unlock_store_if_password_page(Config.STORE_PASSWORD)
        page.search_product(Config.PRODUCT_NAME)
        page.open_product_from_results(Config.PRODUCT_NAME)
        page.add_current_product_to_cart()
        page.open_cart()
        assert page.cart_contains_product(
            Config.PRODUCT_NAME
        ), f"Expected '{Config.PRODUCT_NAME}' in cart, but it was not found."
    finally:
        driver.quit()
