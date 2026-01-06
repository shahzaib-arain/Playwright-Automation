// tests/responsive-layout.spec.ts
import { test, expect } from '@playwright/test';

test('Page layout is responsive', async ({ page }) => {
  // Test desktop view
  await page.setViewportSize({ width: 1200, height: 800 });
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  await expect(page.locator('body')).toBeVisible();
  
  // Test mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  await expect(page.locator('body')).toBeVisible();
  await expect(page.getByText('Customer Login')).toBeVisible();
});