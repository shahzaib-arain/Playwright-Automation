// tests/tab-order.spec.ts
import { test, expect } from '@playwright/test';

test('Verify tab key navigation works', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  // Focus on first input field
  await page.locator('input[name="username"]').focus();
  
  // Press Tab and check focus moves
  await page.keyboard.press('Tab');
  
  const focusedElement = await page.evaluate(() => {
    return document.activeElement?.tagName;
  });
  
  // Should be on password field or another focusable element
  expect(['INPUT', 'BUTTON', 'A']).toContain(focusedElement);
  
  // Press Tab again
  await page.keyboard.press('Tab');
  
  const secondFocusedElement = await page.evaluate(() => {
    return document.activeElement?.tagName;
  });
  
  // Should still be a focusable element
  expect(['INPUT', 'BUTTON', 'A']).toContain(secondFocusedElement);
});