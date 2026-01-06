// tests/form-field-types.spec.ts
import { test, expect } from '@playwright/test';

test('Form fields have correct input types', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  
  // Check specific field types
  const ssnField = page.locator('#customer\\.ssn');
  const phoneField = page.locator('#customer\\.phoneNumber');
  
  await expect(ssnField).toHaveAttribute('type', 'text');
  await expect(phoneField).toHaveAttribute('type', 'text');
  
  // Check password fields are type password
  const passwordField = page.locator('#customer\\.password');
  const confirmPasswordField = page.locator('#repeatedPassword');
  
  await expect(passwordField).toHaveAttribute('type', 'password');
  await expect(confirmPasswordField).toHaveAttribute('type', 'password');
});