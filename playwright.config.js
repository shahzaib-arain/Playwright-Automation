const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 120000,
  
  // Add this reporter section
  reporter: [
    ['html'], // Simple HTML report
    ['list']  // Shows results in console
  ],
  
  use: {
    baseURL: 'https://staging.meandem.vercel.app',
    browserName: 'chromium',
    headless: true,
  },
});