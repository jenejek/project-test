module.exports = {

    //ссылки
    homePage: process.env.URL,
    authPage: process.env.URL + 'login',
    basketPage: process.env.URL + 'basket',
    currentPage: function () {
        return document.location.href;
    },

    //тестовые данные
    login: 'test',
    password: 'test',

    //запросы
    'Запрос на очистку корзины': function () {
        return [process.env.URL + 'basket/clear', '', 'post',]
    },
    'Запрос Авторизации': function () {
        return [process.env.URL + 'login', '{"LoginForm[username]":"test","LoginForm[password]":"test", "LoginForm[rememberMe]":"0", "LoginForm[rememberMe]":"1","login-button":""}', 'post',]
    },
    'Запрос на добавление продукта': function () {
        return [process.env.URL + 'basket/create', '{"product":"3","count":"2"}', 'post',]
    },


};