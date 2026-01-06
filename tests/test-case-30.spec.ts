// tests/element-visibility.spec.ts
import { test, expect } from '@playwright/test';

test('Elements visibility states are correct', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  // Verify visible elements
  const visibleElements = [
    page.getByRole('button', { name: 'Log In' }),
    page.getByRole('link', { name: 'Register' }),
    page.locator('input[name="username"]'),
    page.locator('input[name="password"]')
  ];
  
  for (const element of visibleElements) {
    await expect(element).toBeVisible();
    await expect(element).toBeEnabled();
  }
  
  // Check that hidden elements (if any) are not visible
  const hiddenElements = page.locator('[style*="display: none"], [style*="visibility: hidden"]');
  const hiddenCount = await hiddenElements.count();
  
  if (hiddenCount > 0) {
    for (let i = 0; i < hiddenCount; i++) {
      await expect(hiddenElements.nth(i)).toBeHidden();
    }
  }
});