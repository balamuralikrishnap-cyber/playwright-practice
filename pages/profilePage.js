const BasePage = require('./basePage');

class ProfilePage extends BasePage {
    constructor(page) {
        super(page);
        this.profileHeader = '.main-header';
        this.logoutButton = page.locator('//button[text()="Log out]');
    }

    async getProfileHeader() {
        return await this.getText(this.profileHeader);
    }

    async logout() {
        await this.click(this.logoutButton);
    }
}

module.exports = ProfilePage;
