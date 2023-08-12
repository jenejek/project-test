const steps = require('../steps/steps');
const precondition = require("../precond/precondition");
const value = require("../valueData");
const homePage = require("../pageobjects/homePage");

describe('Проверка кассы', () => {
    it ('Переход в пустую корзину', async () => {
        try {
        await precondition.login();
        await steps.clearBasket();

        await steps.clickButton(homePage.buttonBasket);
        await steps.checkElements(homePage.windowBacket); // тест падает так, как пустая корзина не открывается
        await steps.clickButton(homePage.buttonGoBacket);
        await steps.timeout(1)
        await steps.checkUrlPage(value.basketPage);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });


});