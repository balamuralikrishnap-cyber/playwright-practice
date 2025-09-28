const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProfilePage = require('../pages/profilePage');

test('User can logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('https://demoqa.com/login');
    await loginPage.login('testuser', 'Test@123');

    const profilePage = new ProfilePage(page);
    await profilePage.logout();

    await expect(page).toHaveURL('https://demoqa.com/login');
});
