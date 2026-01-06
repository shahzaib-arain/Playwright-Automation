// tests/placeholder-text.spec.ts
import { test, expect } from '@playwright/test';

test('Input fields have placeholder text', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  const usernameField = page.locator('input[name="username"]');
  const passwordField = page.locator('input[name="password"]');
  
  await expect(usernameField).toHaveAttribute('type', 'text');
  await expect(passwordField).toHaveAttribute('type', 'password');
});