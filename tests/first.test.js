// playwright-advanced.js
const { test, expect } = require('@playwright/test');

// Configure test with video recording for all tests
test.use({
  video: 'on',          // Record video for every test
  screenshot: 'only-on-failure', // Take screenshot only on failure
});

test('Full-featured test with logging, screenshot, and video', async ({ page }) => {

  // Logging function
  function log(message) {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  }

  log('Navigating to example.com...');
  await page.goto('https://example.com');

  log('Verifying page title...');
  const title = await page.title();
  log(`Page title: ${title}`);
  expect(title).toContain('Exaple Domain');

  log('Clicking on More Information link...');
  const link = page.locator('a');
  await link.click();

  log('Waiting for navigation...');
  await page.waitForLoadState('domcontentloaded');

  log('Test completed!');
});
