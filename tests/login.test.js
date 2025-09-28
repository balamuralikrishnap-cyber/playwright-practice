const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test.describe('Login Tests', () => {
    test('Invalid login shows error', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('https://demoqa.com/login');
        await loginPage.login('invalidUser', 'invalidPass');

        const error = await loginPage.getErrorMessage();
        expect(error).toContain('Invalid username or password!');
    });

    test('Valid login redirects to profile', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('https://demoqa.com/login');
        await loginPage.login('testuser', 'Test@123');

        await expect(page).toHaveURL(/.*profile/);
    });
});
