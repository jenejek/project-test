class AuthForm {

    get loginInputAuthorization() {
        return '[id="loginform-username"]';
    }
    get passwordInputAuthorization() {
        return '[id="loginform-password"]';
    }
    get buttonSubmitAuth() {
        return '//*[@name="login-button"][contains(text(),"Вход")]';
    }

}

module.exports = new AuthForm();