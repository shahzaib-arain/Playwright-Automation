// tests/page-scroll.spec.ts
import { test, expect } from '@playwright/test';

test('Page can be scrolled and retains structure', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  // Get initial scroll position
  const initialScrollY = await page.evaluate(() => window.scrollY);
  expect(initialScrollY).toBe(0);
  
  // Scroll down
  await page.evaluate(() => window.scrollTo(0, 300));
  
  const scrolledY = await page.evaluate(() => window.scrollY);
  expect(scrolledY).toBeGreaterThan(0);
  
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  
  const finalScrollY = await page.evaluate(() => window.scrollY);
  expect(finalScrollY).toBe(0);
  
  // Verify content is still visible after scrolling
  await expect(page.getByText('Customer Login')).toBeVisible();
});