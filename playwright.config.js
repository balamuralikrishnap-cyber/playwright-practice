import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,            // global test timeout
  use: {
    headless: true,           // run browser in headless mode
    viewport: { width: 1280, height: 720 },
    actionTimeout: 30000,     // per-action timeout
    navigationTimeout: 60000, // per-navigation timeout
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ],
});