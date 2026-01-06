// tests/contact-us-ui.spec.ts
import { test, expect } from '@playwright/test';

test('Contact Us form has all fields', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/contact.htm');
  
  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#phone')).toBeVisible();
  await expect(page.locator('#message')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Send to Customer Care' })).toBeVisible();
});