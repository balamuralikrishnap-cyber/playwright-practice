
import { test,expect } from '@playwright/test';

test.describe("test suite to validate page title",()=>
{

    test("testcase to validate page title",async ({ page }) =>
    {
        await page.goto("https://example.com")
        console.log(await page.title())
        await expect(page).toHaveTitle('Example Domain')

    });
});
