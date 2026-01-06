// tests/register-form-ui.spec.ts
import { test, expect } from '@playwright/test';

test('Register form has all required fields', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  
  await expect(page.locator('#customer\\.firstName')).toBeVisible();
  await expect(page.locator('#customer\\.lastName')).toBeVisible();
  await expect(page.locator('#customer\\.address\\.street')).toBeVisible();
  await expect(page.locator('#customer\\.ssn')).toBeVisible();
  await expect(page.locator('#customer\\.username')).toBeVisible();
  await expect(page.locator('#customer\\.password')).toBeVisible();
  await expect(page.locator('#repeatedPassword')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
});