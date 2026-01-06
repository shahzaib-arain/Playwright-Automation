// tests/page-load-speed.spec.ts
import { test, expect } from '@playwright/test';

test('Page loads within acceptable time', async ({ page }) => {
  const startTime = Date.now();
  
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  const loadTime = Date.now() - startTime;
  
  // Verify page loads within 10 seconds (adjust as needed)
  expect(loadTime).toBeLessThan(10000);
  
  // Also verify page is loaded
  await expect(page.getByText('Customer Login')).toBeVisible();
});