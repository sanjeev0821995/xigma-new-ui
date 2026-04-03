# Test Design - AdNabuTestStore

## A) Product Search (3 test cases)

- **TC-PS-01 | Search with valid product keyword (Positive)**
  - **Precondition:** User is on storefront home page (after entering store password if prompted).
  - **Steps:** Enter a valid product name (e.g., `Nano CO2 Inflator`) in search and submit.
  - **Expected Result:** Relevant product(s) are displayed; matching product title is visible and clickable.

- **TC-PS-02 | Search with invalid/non-existent keyword (Negative)**
  - **Precondition:** User is on storefront home page.
  - **Steps:** Search for a random string (e.g., `zzzxxyy123-no-product`).
  - **Expected Result:** “No results” / “0 results” message is shown (or empty results state); no product card is returned.

- **TC-PS-03 | Search using whitespace-only input (Edge Case)**
  - **Precondition:** User is on storefront home page.
  - **Steps:** Enter only spaces (`"   "`) in search and submit.
  - **Expected Result:** Input is sanitized/trimmed; user remains on search page with no crash, and either default/empty result state is shown.

## B) Add to Cart (3 test cases)

- **TC-AC-01 | Add in-stock product to cart from product page (Positive)**
  - **Precondition:** Product detail page for an in-stock item is open.
  - **Steps:** Click **Add to cart** and open cart.
  - **Expected Result:** Product appears in cart with quantity `1` (or quantity increases if already present).

- **TC-AC-02 | Attempt add-to-cart for out-of-stock product (Negative)**
  - **Precondition:** Product detail page for a sold-out item is open.
  - **Steps:** Try clicking **Add to cart**.
  - **Expected Result:** Add-to-cart is disabled or blocked; clear out-of-stock feedback is shown; cart is unchanged.

- **TC-AC-03 | Add same product multiple times (Edge Case)**
  - **Precondition:** Product detail page is open for an in-stock item.
  - **Steps:** Click **Add to cart** 2-3 times (or add once, then increase quantity in cart).
  - **Expected Result:** Cart consolidates line item correctly and quantity updates accurately without duplicate inconsistent entries.
