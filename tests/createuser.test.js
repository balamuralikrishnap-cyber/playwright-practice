const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProfilePage = require('../pages/profilePage');

test.describe('Profile Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('https://demoqa.com/login');
        await loginPage.login('testuser', 'Test@123');
    });

    test('Profile header is visible after login', async ({ page }) => {
        const profilePage = new ProfilePage(page);
        const header = await profilePage.getProfileHeader();
        console.log(header); 
        expect(header).toBe('Profile');
    });
});
