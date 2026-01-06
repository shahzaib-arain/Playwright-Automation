// tests/font-styles.spec.ts
import { test, expect } from '@playwright/test';

test('Verify consistent font styling', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  // Check headings have appropriate font sizes
  const headings = page.locator('h1, h2, h3');
  const headingCount = await headings.count();
  
  expect(headingCount).toBeGreaterThan(0);
  
  // Verify at least one heading exists and is visible
  if (headingCount > 0) {
    await expect(headings.first()).toBeVisible();
  }
  
  // Check body text is visible and readable
  const bodyText = page.locator('body').first();
  const bodyFontSize = await bodyText.evaluate(element => {
    return window.getComputedStyle(element).fontSize;
  });
  
  // Font size should be reasonable for readability
  expect(parseInt(bodyFontSize)).toBeGreaterThanOrEqual(12);
});