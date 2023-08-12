const steps = require('../steps/steps');
const value = require("../valueData");
const authPage = require("../pageobjects/authForm");
const homePage = require("../pageobjects/homePage");

// авторизация
const login = async () => {
    try {
        await steps.openPage(value.authPage);
        await steps.setValue(authPage.loginInputAuthorization, value.login);
        await steps.setValue(authPage.passwordInputAuthorization, value.password);
        await steps.clickButton(authPage.buttonSubmitAuth);
        await steps.checkElements(homePage.dropdownUser);
    }
    catch (error) {
        throw new Error(error.message);
        }
}

//делает, чтобы в кассе был только 1 продукт
const add1product = async () => {
    try {
        await steps.clearBasket();
        await steps.clickButton(homePage.buttonFirstNonActionProduct);
        await steps.timeout(1);
        await steps.checkElementText(homePage.labelBasket,'1');
    } catch (error) {
        throw new Error(error.message);
    }
}


module.exports = {
    login,
    add1product,
};