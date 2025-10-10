// tests/googleAutosuggestionsXPath.spec.js
import { test, expect } from '@playwright/test';

test.describe('Google Autosuggestions with XPath', () => {

  test('should show visible autosuggestions for a query', async ({ page }) => {
    // 1. Go to Google
    await page.goto('https://www.google.com');

 

    // 2. Type a query
    const searchBox = page.locator('//*[@name="q"]');
    await searchBox.fill('playwright');

    // 3. Wait for autosuggestions using XPath
    const suggestionLocator = page.locator('//ul[@role="listbox"]//li//span');
    await suggestionLocator.first().waitFor({ state: 'visible' });

    // 4. Collect only visible suggestions
    const visibleSuggestions = [];
    const count = await suggestionLocator.count();

    for (let i = 0; i < count; i++) {
      const suggestion = suggestionLocator.nth(i);
      if (await suggestion.isVisible()) {
        visibleSuggestions.push((await suggestion.textContent()).trim());
      }
    }

    console.log('Visible Autosuggestions:', visibleSuggestions);

    // 5. Assertions
    expect(visibleSuggestions.length).toBeGreaterThan(0);
    expect(visibleSuggestions[0].toLowerCase()).toContain('playwright');

   
  });

});
