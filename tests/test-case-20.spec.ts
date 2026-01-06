// tests/images-load.spec.ts
import { test, expect } from '@playwright/test';

test('All images load successfully', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  const images = page.locator('img');
  const count = await images.count();
  
  expect(count).toBeGreaterThan(0);
  
  // Check each image loads
  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    await expect(img).toBeVisible();
  }
});