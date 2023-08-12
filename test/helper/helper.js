const axios = require('axios');

class Helper {
    async axiosRequest([url, data, method]) {
        let config = {
            method: method,
            url: url,
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                accept: 'application/json, text/javascript, */*; q=0.01',
                // cookie: 'PHPSESSID=' + (await this.getCookie('PHPSESSID')) + '; _csrf=' + (await this.getCookie('_csrf')),
                cookie: `${process.argv[10]}`,
                'X-CSRF-Token' : `${process.argv[11]}`,
            },
            data: data,
        };

        let configDeleteGet = {
            method: method,
            url: url,
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                accept: '*/*',
                // cookie: 'PHPSESSID=' + (await this.getCookie('PHPSESSID')) + '; _csrf=' + (await this.getCookie('_csrf')),
                cookie: `${process.argv[10]}`
            },
        };

        await console.log(config.headers.cookie);

        if (method === 'delete' || method === 'get') {
            await axios(configDeleteGet)
                .then(function (response) {
                    console.log(response.status);
                })
                .catch(function (error) {
                    console.log(error.response);
                });
        } else {
            await axios(config)
                .then(function (response) {
                    console.log(response.status);
                })
                .catch(function (error) {
                    console.log(error.response.status);
                });
        }
    };
}

    module.exports = new Helper();