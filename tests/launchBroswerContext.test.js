// tests/launchPageInContext.spec.js
import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test.describe('Launch page inside a new browser context', () => {

  test('should open a new page within a new context', async ({ page }) => {

    const browser = await chromium.launch({
      headless: false           // set to true for CI
     });

    // 1️⃣ Create a new isolated browser context
    const context = await browser.newContext();

    // 2️⃣ Launch a new page inside this context
    const page1 = await context.newPage();

    // 3️⃣ Navigate to Google
    await page1.goto('https://www.google.com');

    
    await page1.waitForTimeout(1000); // just to see it in action
    
     await page1.waitForTimeout(10000); 

    // 6️⃣ Close context after test
    await context.close();
    await browser.close()
    page.bringToFront()
    await page.waitForTimeout(10000); 
     await page.goto('https://www.google.com');

  });

});
