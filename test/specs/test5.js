const steps = require('../steps/steps');
const precondition = require("../precond/precondition");
const homePage = require("../pageobjects/homePage");
const value = require("../valueData");

describe('Проверка кассы', () => {
    it ('Переход в корзину с 9 акционными товарами одного наименования', async () => {
        try {
            await precondition.login();
            await steps.clearBasket();

            await steps.setValue(homePage.inputFirstActionProduct,'9');
            await steps.clickButton(homePage.buttonFirstActionProduct);
            await steps.scroll(homePage.labelBasket);
            await steps.checkElementText(homePage.labelBasket,'9');
            await steps.clickButton(homePage.buttonBasket);
            await steps.checkElements(homePage.windowBacket);   //тест падает, так как при 9 товарах в кассе, не открывается окно кассы, а редиректит сразу в кассу
            await steps.checkElements(homePage.priceProduct);
            await steps.checkElements(homePage.nameProduct);
            await steps.checkElements(homePage.totalPriceProducts);
            await steps.clickButton(homePage.buttonGoBacket);
            await steps.timeout(1),
            await steps.checkUrlPage(value.basketPage);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });


});