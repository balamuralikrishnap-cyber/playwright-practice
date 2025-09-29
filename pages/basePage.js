class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await this.page.locator(locator).click();
    }

    async type(locator, text) {
        await this.page.locator(locator).fill(text);
    }

    async getText(locator) {
        return await this.page.locator(locator).textContent({ timeout: 90000 });
    }

    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }
}

module.exports = BasePage;
