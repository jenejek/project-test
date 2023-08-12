const steps = require('../steps/steps');
const precondition = require("../precond/precondition");
const value = require("../valueData");
const homePage = require("../pageobjects/homePage");

describe('Проверка кассы', () => {
    it ('Переход в корзину с 1 акционным товаром', async () => {
        try {
            await precondition.login();
            await steps.clearBasket();

            await steps.setValue(homePage.inputFirstActionProduct,'1');
            await steps.clickButton(homePage.buttonFirstActionProduct);
            await steps.timeout(1);
            await steps.checkElementText(homePage.labelBasket,'1');
            await steps.clickButton(homePage.buttonBasket);
            await steps.checkElements(homePage.windowBacket);
            await steps.checkElements(homePage.priceProduct);
            await steps.checkElements(homePage.nameProduct);
            await steps.checkElements(homePage.totalPriceProducts);
            await steps.clickButton(homePage.buttonGoBacket);
            await steps.timeout(1);
            await steps.checkUrlPage(value.basketPage);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });


});