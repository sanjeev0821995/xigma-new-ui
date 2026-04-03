from urllib.parse import quote_plus

from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By

from pages.base_page import BasePage


class StorefrontPage(BasePage):
    # Password page selectors (Shopify)
    PASSWORD_INPUT = (By.CSS_SELECTOR, "input[type='password'], #Password")
    PASSWORD_ENTER_BUTTON = (By.CSS_SELECTOR, "button[type='submit'], input[type='submit']")
    INCORRECT_PASSWORD_HINT = (By.CSS_SELECTOR, ".errors, .form__message, .password-message")

    # Search selectors
    SEARCH_INPUT = (By.CSS_SELECTOR, "input[type='search'], input[name='q']")
    SEARCH_RESULT_TITLES = (By.CSS_SELECTOR, "a[href*='/products/']")
    NO_RESULTS_TEXT = (
        By.XPATH,
        "//*[contains(translate(normalize-space(.),"
        "'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),"
        "'no results') or contains(translate(normalize-space(.),"
        "'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'0 results')]",
    )

    # Product details/cart selectors
    PRODUCT_PAGE_TITLE = (By.CSS_SELECTOR, "h1, .product__title")
    ADD_TO_CART_BUTTON = (
        By.XPATH,
        "//button[contains(translate(normalize-space(.),"
        "'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'add to cart')]",
    )
    CART_LINK = (By.CSS_SELECTOR, "a[href*='/cart'], .header__icon--cart")
    CART_QTY_INPUT = (By.CSS_SELECTOR, "input[name='updates[]'], input[name='quantity']")
    CART_ITEM_LINK = (By.CSS_SELECTOR, "a[href*='/products/']")

    def open_store(self, base_url: str) -> None:
        self.driver.get(base_url)

    def unlock_store_if_password_page(self, password: str) -> None:
        """Enter storefront password only if page is protected."""
        try:
            password_input = self.wait_for_visible(self.PASSWORD_INPUT)
            password_input.clear()
            password_input.send_keys(password)
            self.wait_for_clickable(self.PASSWORD_ENTER_BUTTON).click()
            # Wait until either search input is visible (store entered) or error hint appears.
            self.wait.until(
                lambda d: self._is_present(self.SEARCH_INPUT)
                or self._is_present(self.INCORRECT_PASSWORD_HINT)
            )
            if self._is_present(self.INCORRECT_PASSWORD_HINT):
                raise AssertionError("Store password was rejected by storefront.")
        except TimeoutException:
            # Not a password page; continue.
            pass

    def search_product(self, product_name: str) -> None:
        # Some Shopify themes hide search input behind a modal/icon.
        # Prefer UI search when visible, otherwise use explicit search URL.
        try:
            search_input = self.wait_for_visible(self.SEARCH_INPUT)
            search_input.clear()
            search_input.send_keys(product_name)
            search_input.submit()
        except TimeoutException:
            base = self.driver.current_url.split("/products/")[0].split("/search")[0].rstrip("/")
            self.driver.get(f"{base}/search?type=product&q={quote_plus(product_name)}")
        self.wait.until(
            lambda d: self._is_present(self.SEARCH_RESULT_TITLES) or self._is_present(self.NO_RESULTS_TEXT)
        )

    def open_product_from_results(self, product_name: str) -> None:
        # Open the first matching product link.
        matches = self.driver.find_elements(By.PARTIAL_LINK_TEXT, product_name)
        if matches:
            matches[0].click()
        else:
            # Fallback: first product link in results
            self.wait_for_clickable(self.SEARCH_RESULT_TITLES).click()
        self.wait_for_visible(self.PRODUCT_PAGE_TITLE)

    def add_current_product_to_cart(self) -> None:
        self.wait_for_clickable(self.ADD_TO_CART_BUTTON).click()
        # Wait for cart link to be available; some themes use drawer/cart count updates.
        self.wait.until(lambda d: self._is_present(self.CART_LINK))

    def open_cart(self) -> None:
        self.wait_for_clickable(self.CART_LINK).click()
        self.wait.until(lambda d: self._is_present(self.CART_QTY_INPUT) or self._is_present(self.CART_ITEM_LINK))

    def cart_contains_product(self, product_name: str) -> bool:
        title_elements = self.driver.find_elements(*self.CART_ITEM_LINK)
        title_texts = [el.text.strip().lower() for el in title_elements if el.text.strip()]
        if any(product_name.lower() in txt for txt in title_texts):
            return True
        # Some themes show only quantity input; treat quantity>=1 as fallback signal.
        qty_inputs = self.driver.find_elements(*self.CART_QTY_INPUT)
        for qty in qty_inputs:
            value = qty.get_attribute("value")
            if value and value.isdigit() and int(value) >= 1:
                return True
        return False

    def _is_present(self, locator) -> bool:
        return len(self.driver.find_elements(*locator)) > 0
