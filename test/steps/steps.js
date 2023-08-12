const elementManager = require('../helper/elementManager');
const { assert } = require('chai');
const allure = require('@wdio/allure-reporter').default;
const value = require("../valueData");
const helper = require("../helper/helper");
const homePage = require("../pageobjects/homePage");
const axios = require('axios');


class Steps {

    async openPage(data) {
            await allure.startStep(`Открытие страницы: ${data}`);
            await browser.url(data);
            await allure.endStep();
        }

    async setValue(element,data) {
            await allure.startStep(`Ввод значения ${data} в поле ${element}`);
            await elementManager.isDisplayed(element);
            await elementManager.setValue(element,data);
            await allure.endStep();
        }

    async clickButton(element) {
            await allure.startStep(`Нажатие ${element}`);
            await elementManager.isDisplayed(element);
            await elementManager.click(element);
            await allure.endStep();
        }

    async timeout(sec) {
        await browser.pause(Number(sec) * 1000);
    }

    async checkElements(element) {
            await allure.startStep(`Проверка отображения элемента ${element}`);
            await this.timeout(1);
            await assert.strictEqual(
                await elementManager.isDisplayed(element),
                true,
                `Элемент ${element} не отображается`
                );
            await allure.endStep();
        }

    async checkElementText(element, data) {
            await allure.startStep(`Проверка, что элемент - ${element} содержит значение - ${data}`);
            const currentValue = await elementManager.getTheText(element);
            await assert.strictEqual(
                currentValue.toLowerCase().includes(data.toLowerCase()),
            true,
            `Искомое название - ${data} , значение в элементе на сайте - ${currentValue}`
            );
            await allure.endStep();
        }

    async clearBasket() {
            await allure.startStep(`Очистка корзины`);
            const currentValue = await elementManager.getTheText(homePage.labelBasket); //значение в лейбле кассы
            if (!await elementManager.isDisplayed(homePage.freeBasket)) //выполняется если в корзине не 0 товаров
            {
                if (currentValue.includes('9'))  //выполняется если 9 товаров в корзине(сделано чтобы обойти блокировку, касса при 9 продуктах не открывается)
                {
                    await elementManager.click(homePage.buttonFirstNonActionProduct);
                    await this.timeout(1);
                }
                await elementManager.click(homePage.buttonBasket);
                await elementManager.click(homePage.buttonClearBasket);
                await this.timeout(1);
                await elementManager.isDisplayed(homePage.freeBasket);
            }
            await allure.endStep();
        }


    async checkUrlPage(data) {
            await allure.startStep(`Проверка, что находимся на странице ${data}`);
            const checkedUrl = await browser.execute(value.currentPage);
            await assert.strictEqual(
                await checkedUrl.includes(data),
                true,
                `Текущая страница ${checkedUrl} не содержит - ${data}`
            );
            await allure.endStep();
        }

    async addProductsInBasket(data) {
        await allure.startStep(`Добавляем поочередно ${data} продукт(а/ов) в корзину`);
        let locator;
        for (let i=2; i< Number(data)+2; i++) {
            locator = `${homePage.buttonAddProduct}[${i}]`;
            await elementManager.scrollIntoView(locator);
            await elementManager.click(locator);
            await this.timeout(1);
        }
        await allure.endStep();
    }

    async scroll(element) {
            await allure.startStep(`Скролим к элементу ${element} на странице`);
            await this.timeout(1);
            await elementManager.scrollIntoView(element);
            await allure.endStep();
        }

    /////////////////////////////_____API_____////////////////////////////////////////

    async getCookies() {
        await allure.startStep(`Извлекаем куки`);
        try {
            const response = await axios.get('https://enotes.pointschool.ru/');
            // Извлекаем куки из заголовков ответа
            const cookies = response.headers['set-cookie'];
            // Обрабатываем полученные куки
            console.log('Полученные куки:', cookies);
            return process.argv[10] = cookies;
        } catch (error) {
            console.error('Ошибка при получении кук:', error);
        }
        await allure.endStep();
    }


    async sendAPIrequest(requestAPI) {
        await allure.startStep(`Отправляем запрос ${requestAPI}`);
        await helper.axiosRequest(value[requestAPI]())
            .then(() => {
                console.log(`Запрос ${requestAPI}↑--------------↑`);
            })
            .catch((error) => {
                console.error('Ошибка запроса:', error);
            });
        await allure.endStep();
    }

    async getToken() {
        await allure.startStep(`Извлекаем токен`);
        try {
            const response = await axios.get('https://enotes.pointschool.ru/');
            // Извлекаем токен из заголовков ответа
            // await console.log(response.data.toString().match(/name="csrf-token"\s*content="([^"]+)"/)[1]);
            const token = await response.data.toString().match(/name="csrf-token"\s*content="([^"]+)"/)[1];
            console.log('Полученный токен:', token);
            return process.argv[11] = token;
        } catch (error) {
            console.error('Ошибка при получении токена:', error);
        }

        await allure.endStep();
    }
}

module.exports = new Steps();