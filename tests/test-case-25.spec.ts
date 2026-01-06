// tests/forgot-login-ui.spec.ts
import { test, expect } from '@playwright/test';

test('Forgot Login info page loads', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/lookup.htm');
  
  await expect(page.getByText('Forgot login info?')).toBeVisible();
  await expect(page.locator('#firstName')).toBeVisible();
  await expect(page.locator('#lastName')).toBeVisible();
  await expect(page.locator('#address\\.street')).toBeVisible();
  await expect(page.locator('#ssn')).toBeVisible();
});