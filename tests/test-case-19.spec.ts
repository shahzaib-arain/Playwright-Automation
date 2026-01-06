// tests/meta-tags.spec.ts
import { test, expect } from '@playwright/test';

test('Page has basic meta tags', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  // Check title
  const title = await page.title();
  expect(title).toBeTruthy();
  expect(title.length).toBeGreaterThan(5);
  
  // Check charset meta tag
  const charsetMeta = page.locator('meta[charset], meta[http-equiv="Content-Type"]');
  await expect(charsetMeta.first()).toBeAttached();
});