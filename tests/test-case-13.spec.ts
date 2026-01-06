// tests/home-page-loads.spec.ts
import { test, expect } from '@playwright/test';

test('Home page loads successfully', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
  await expect(page.getByText('Customer Login')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
});