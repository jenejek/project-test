module.exports = {

    async isDisplayed(locator) {
        return await $(locator).isDisplayed();
    },

    async setValue(locator, value) {
        await $(locator).waitForExist();
        await $(locator).waitForClickable();
        await $(locator).waitForDisplayed();
        await $(locator).setValue(value);
    },

    async click(locator) {
        await $(locator).waitForClickable();
        await $(locator).waitForDisplayed();
        await $(locator).click();
    },

    async getTheText(locator) {
        await $(locator).waitForExist();
        await $(locator).waitForDisplayed();

        return await $(locator).getText();
    },

    async scrollIntoView(locator) {
        return await $(locator).scrollIntoView({ block: 'center', inline: 'center' });
    },
};