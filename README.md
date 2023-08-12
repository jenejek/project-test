# Тестовый проект 
https://enotes.pointschool.ru/


## Текущие версии

- [Node.js (v20.3.1)](https://nodejs.org/en/)
- [npm (9.6.7)](https://www.npmjs.com/)
- [Java (20.0.1)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Selenium-Server (20.0.1)](https://www.selenium.dev/downloads/) (опционально)


## Установка проекта

Выполнить команду в терминале/консоле:

```
npm install
```

## Фреймворки:

- [WebdriverIO (v8)](https://webdriver.io/)
- [Allure Reporter](https://webdriver.io/docs/allure-reporter.html)
- [Mocha Framework](https://www.npmjs.com/package/wdio-mocha-framework)

## Библиотека утверждений

- [Chai (4.3.7)](https://www.chaijs.com/)

## Запуск тестов

- Пример команды для запуска всех тестов:

```
URL='https://enotes.pointschool.ru/' npx wdio run ./wdio.conf.js
```

- Пример команды для запуска определенного теста(указывается путь теста):

```
URL='https://enotes.pointschool.ru/' npx wdio run ./wdio.conf.js --spec test/specs/test1.js
```

## Allure

[Allure Reporter Webdriverio](https://webdriver.io/docs/allure-reporter.html)
[Allure Reporter Official documentation](https://docs.qameta.io/allure/)

Используемые команды:

- ```npm run generate-open``` сгенерировать и открыть отчет
- ```npm run clean-report``` удалить директории `allure-results` и `allure-report`

## Используемые переменные

```process.argv[10]``` - записываем куки

```process.argv[11]```- записываем токен
