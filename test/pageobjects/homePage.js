class HomePage {

    // хедер
    get dropdownUser() {
        return '[id="dropdownUser"]';
    }
    get buttonBasket() {
        return '[id="dropdownBasket"]';
    }
    get freeBasket() {
        return '//*[contains(@class,"basket-count-items")][.="0"]';
    }
    get labelBasket() {
        return '//*[contains(@class,"basket-count-items")]';
    }

    // страница
    get buttonFirstNonActionProduct() {
        return '(//*[@class="wrap-ribbon d-none"])[1]/../..//*[contains(@class,"actionBuyProduct")]';
    }
    get inputFirstNonActionProduct() {
        return '(//*[@class="wrap-ribbon d-none"])[1]/../..//*[@name="product-enter-count"]';
    }
    get buttonFirstActionProduct() {
        return '(//*[@class="wrap-ribbon"])[1]/../..//*[contains(@class,"actionBuyProduct")]';
    }
    get inputFirstActionProduct() {
        return '(//*[@class="wrap-ribbon"])[1]/../..//*[@name="product-enter-count"]';
    }
    get buttonPagination2() {
        return '[data-page-number="2"]';
    }
    get buttonAddProduct() {
        return '(//*[contains(@class,"actionBuyProduct")])'; //[class="actionBuyProduct btn btn-primary mt-3"]
    }

    // окно корзины
    get buttonClearBasket() {
        return '//*[contains(@class,"actionClearBasket")]/a';
    }
    get windowBacket() {
        return '[aria-labelledby="dropdownBasket"]';
    }
    get buttonGoBacket() {
        return '[class*="btn-primary btn-sm"]';
    }
    get priceProduct() {
        return '[class="basket-item-price"]';
    }
    get nameProduct() {
        return '[class="basket-item-title"]';
    }
    get totalPriceProducts() {
        return '[class="basket_price"]';
    }

}

module.exports = new HomePage();