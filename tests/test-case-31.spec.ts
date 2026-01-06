// tests/input-fields-editable.spec.ts
import { test, expect } from '@playwright/test';

test('Input fields can be edited', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/contact.htm');
  
  const testText = 'Test Input';
  const nameField = page.locator('#name');
  
  await nameField.fill(testText);
  const value = await nameField.inputValue();
  
  expect(value).toBe(testText);
});