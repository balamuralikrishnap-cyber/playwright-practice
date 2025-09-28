const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.loginLink = 'text=Login';
    }

    async goToLogin() {
        await this.click(this.loginLink);
    }
}

module.exports = HomePage;
