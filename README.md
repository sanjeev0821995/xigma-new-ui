# AdNabu QA Assignment - Selenium Automation

This repository contains:

1. **Test design** for:
   - Product Search
   - Add to Cart
2. **One automated scenario** using Python + Selenium:
   - Search for a product and add it to cart successfully

---

## Project Structure

```text
.
├── TEST_CASES.md
├── config.py
├── driver_factory.py
├── requirements.txt
├── pages
│   ├── base_page.py
│   └── storefront_page.py
├── tests
│   ├── conftest.py
│   └── test_search_and_add_to_cart.py
└── reports
```

---

## Prerequisites

- Python 3.10+
- Google Chrome installed
- ChromeDriver available in PATH

> Tip: Selenium 4 can auto-manage drivers in many environments, but having ChromeDriver in PATH is still recommended for stability.

---

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

---

## Configuration

Configuration is environment-variable based (no hardcoded test data in test logic).

- `STORE_URL` (default: `https://adnabu-test-8.myshopify.com`)
- `STORE_PASSWORD` (default: `AdNabuQA`)
- `PRODUCT_NAME` (default: `Nano CO2 Inflator`)
- `HEADLESS` (default: `true`)
- `WAIT_TIMEOUT_SECONDS` (default: `20`)

Example:

```bash
export STORE_URL="https://adnabu-store-test1.myshopify.com"
export STORE_PASSWORD="AdNabuQA"
export PRODUCT_NAME="Nano CO2 Inflator"
export HEADLESS="true"
```

---

## Run Automated Test

```bash
pytest -v tests/test_search_and_add_to_cart.py \
  --junitxml=reports/pytest-report.xml
```

This generates:
- **JUnit report**: `reports/pytest-report.xml`

You can also save console output:

```bash
pytest -v tests/test_search_and_add_to_cart.py \
  --junitxml=reports/pytest-report.xml | tee reports/test-run.log
```

---

## Notes

- The automation uses **explicit waits** (`WebDriverWait`) and does not use hardcoded sleeps.
- Code is organized using a simple **Page Object Model** for readability and modularity.
- The script supports both password-protected and non-password storefront entry flows.
